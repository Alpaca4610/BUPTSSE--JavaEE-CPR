package com.buptcpr.demo.entity;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Data
@Entity
public class Teacher {

    //账号信息

    @Id
    private String teacherID;
    @NotBlank
    private String passwd;

    //用户信息
    @NotBlank
    private String name;

    @NotBlank
    private String classID;

}
