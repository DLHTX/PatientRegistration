package com.company.project.service.impl;

import com.company.project.dao.PatientRegistrationMapper;
import com.company.project.model.PatientRegistration;
import com.company.project.service.PatientRegistrationService;
import com.company.project.core.AbstractService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;


/**
 * Created by DLHTX on 2021/10/03.
 */
@Service
@Transactional
public class PatientRegistrationServiceImpl extends AbstractService<PatientRegistration> implements PatientRegistrationService {
    @Resource
    private PatientRegistrationMapper patientRegistrationMapper;

}
