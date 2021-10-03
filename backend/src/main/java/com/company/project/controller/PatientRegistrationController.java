package com.company.project.web;
import com.company.project.core.Result;
import com.company.project.core.ResultGenerator;
import com.company.project.model.PatientRegistration;
import com.company.project.service.PatientRegistrationService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

/**
* Created by DLHTX on 2021/10/03.
*/
@RestController
@RequestMapping("/api/patient")
public class PatientRegistrationController {
    @Resource
    private PatientRegistrationService patientRegistrationService;

    @PostMapping("/add")
    public Result add(PatientRegistration patientRegistration) {
        patientRegistrationService.save(patientRegistration);
        return ResultGenerator.genSuccessResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestParam Integer id) {
        patientRegistrationService.deleteById(id);
        return ResultGenerator.genSuccessResult();
    }

    @PostMapping("/update")
    public Result update(PatientRegistration patientRegistration) {
        patientRegistrationService.update(patientRegistration);
        return ResultGenerator.genSuccessResult();
    }

    @PostMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        PatientRegistration patientRegistration = patientRegistrationService.findById(id);
        return ResultGenerator.genSuccessResult(patientRegistration);
    }

    @PostMapping("/list")
    public Result list(@RequestParam(defaultValue = "0") Integer page, @RequestParam(defaultValue = "0") Integer size) {
        PageHelper.startPage(page, size);
        List<PatientRegistration> list = patientRegistrationService.findAll();
        PageInfo pageInfo = new PageInfo(list);
        return ResultGenerator.genSuccessResult(pageInfo);
    }
}
