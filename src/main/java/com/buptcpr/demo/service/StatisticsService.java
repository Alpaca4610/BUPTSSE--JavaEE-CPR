package com.buptcpr.demo.service;

import com.buptcpr.demo.DAO.StudentRepository;
import com.buptcpr.demo.DAO.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StatisticsService {
    @Autowired
    private StudentRepository studentRepository;
//    @Autowired
//    private TeacherRepository teacherRepository;

    public float get1Rate(String id){

        Integer totalStudent = studentRepository.countAllByClassID(id);
        Integer totalScore = studentRepository.findByClassID(id);
        return Float.parseFloat(totalScore.toString())/Float.parseFloat(totalStudent.toString());
    }
}