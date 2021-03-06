package com.buptcpr.demo.controller;

import com.buptcpr.demo.DAO.AdminRepository;
import com.buptcpr.demo.DAO.CollegeRepository;
import com.buptcpr.demo.DAO.QueryAPI;
import com.buptcpr.demo.DAO.StudentRepository;
//import com.buptcpr.demo.common.Jwt;
import com.buptcpr.demo.common.Jwt;
import com.buptcpr.demo.common.Result;
import com.buptcpr.demo.entity.Student;
import com.buptcpr.demo.service.AdminService;
import com.buptcpr.demo.service.MD5Util;
import com.buptcpr.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin
@Controller
@RequestMapping(path="/student")
public class StudentController {


    @Autowired
    JdbcTemplate j;

    @Autowired
    private StudentService studentService;
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private CollegeRepository collegeRepository;
    @Autowired
    MD5Util md5Util;
    private AdminService adminService;

    // 登录
    @PostMapping("/login")
    @ResponseBody
    public Result<String> login(String id, String password) {
        Student res = studentService.login(id,password);
        if(res!=null){
            return Result.success(Jwt.createJWT(3600000));
        }else{
            return Result.error("1","登陆失败");
        }
    }

    // 学生注册
    @PostMapping(path="/register")
    @ResponseBody
    public Result<Student> studentRegister(@RequestParam String id,
                                                @RequestParam String name,
                                                @RequestParam String password,
                                                @RequestParam String classid){
        int ret = studentService.register(id,name,password,classid);
        if(ret == 1){ //学生已注册, 注册失败
            return Result.error("1","学生已注册, 注册失败");
        }else{
            return Result.success(null);
        }
    }

    // 删除学生: 肯定会成功, 因为只能删除已有的,在界面上显示的学生
    @PostMapping(path="/delete")
    @ResponseBody
    public Result studentDelete(@RequestParam String id)
    {
        if(studentRepository.findByStudentID(id) == null){
            return  Result.error("1","学生不存在！");
        }
        studentService.delete(id);
        return Result.success(null);
    }

    // 更新学生信息
    @PostMapping(path="/update")
    @ResponseBody
    public Result<Student> studentDelete(@RequestParam String id,@RequestParam String name, @RequestParam String password,@RequestParam String classID,@RequestParam int score,@RequestParam int rank)
    {
        int ret = studentService.update(id,name,password,classID,score,rank);
        if(ret == 1){ // 失败, 找不到这个人
            return Result.error("1","找不到该学生");
        }else{
            return Result.success(null);
        }
    }

    @PostMapping(path="/insert")
    @ResponseBody
    public Result<Student> studentInsert(@RequestParam String id,@RequestParam String name, @RequestParam String password,@RequestParam String classID,@RequestParam int score)
    {
        int ret = studentService.insert(id,name,password,classID,score);
        if(ret == 1){ // 失败, 找不到这个人
            return Result.error("1","该学生已存在");
        }else{
            return Result.success(null);
        }
    }

    // 查找所有学生信息
    @GetMapping("/all")
    @ResponseBody
    public Result<List<Student>> getStudent() {
        List<Student> ret = studentRepository.findAll();
        return Result.success(ret);
    }

    @PostMapping("/setScore")
    @ResponseBody
    public Result<String> setScore(
            @RequestParam String studentID, @RequestParam int chinese,
            @RequestParam int math, @RequestParam int english, @RequestParam int science){
        Student byStudentID = studentRepository.findByStudentID(studentID);
        byStudentID.setChinese(chinese);
        byStudentID.setEnglish(english);
        byStudentID.setMath(math);
        byStudentID.setScience(science);
        byStudentID.setScore(chinese+english+math+science);
        byStudentID.setMyRank(RankQuery.getCrank(j,chinese+english+math+science));
        studentRepository.save(byStudentID);
        return Result.success("成绩上传成功");
    }

    @PostMapping("/getScore")
    @ResponseBody
    public Result<List<Map<String, Integer>>> getTotalScore(@RequestParam String studentID) {
        List<Map<String, Integer>> score = studentService.getScore(studentID);
        if (score == null) {
            return Result.error("1", "学生不存在");
        } else {
            return Result.success(score);
        }
    }

    @PostMapping("/get-my-college")
    @ResponseBody
    public Result getMyCollege(@RequestParam String studentID){
        String myCollege = studentService.getMyCollege(studentID);
        if(myCollege.equals("not_yet")){
            return Result.success("not_yet");
        }else if(myCollege.equals("failed")){
            return Result.success("failed");
        }else
            return Result.success(myCollege);
    }

    @PostMapping("/getName")
    @ResponseBody
    public Result name(@RequestParam String id) {
        List<Map> ret = studentRepository.findNameByStudentID(id);
        return Result.success(ret);
    }
}