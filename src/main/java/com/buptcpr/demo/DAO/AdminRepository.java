package com.buptcpr.demo.DAO;

import com.buptcpr.demo.entity.Admin;
import com.buptcpr.demo.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, String> {
    Admin findByadminID(String id);
}
