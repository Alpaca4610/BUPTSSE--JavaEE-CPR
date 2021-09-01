//package com.buptcpr.demo.controller;
//
//import com.buptcpr.demo.DAO.TestRepository;
//import com.buptcpr.demo.entity.User;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.ResponseBody;
//
//@Controller // This means that this class is a Controller
//@RequestMapping(path="/demo") // This means URL's start with /demo (after Application path)
//public class TestController {
//
//        @Autowired // This means to get the bean called userRepository
//        // Which is auto-generated by Spring, we will use it to handle the data
//        private TestRepository testRepository;
//
//        @PostMapping(path="/add") // Map ONLY POST Requests
//        public @ResponseBody String addNewUser (@RequestParam String name
//                , @RequestParam String email) {
//            // @ResponseBody means the returned String is the response, not a view name
//            // @RequestParam means it is a parameter from the GET or POST request
//
//            User n = new User();
//            n.setName(name);
//            n.setEmail(email);
//            testRepository.save(n);
//            return "Saved";
//        }
//
//        @GetMapping(path="/all")
//        public @ResponseBody Iterable<User> getAllUsers() {
//            // This returns a JSON or XML with the users
//            return testRepository.findAll();
//        }
//    }

