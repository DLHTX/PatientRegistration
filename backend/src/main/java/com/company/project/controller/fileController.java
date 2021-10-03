package com.company.project.controller;

import com.company.project.core.Result;
import com.company.project.core.ResultGenerator;
import io.swagger.annotations.Api;
import org.apache.commons.logging.impl.SLF4JLog;
import org.apache.ibatis.javassist.runtime.DotClass;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Date;

@Api("上传文件")
@RestController
@RequestMapping("/api/file")
public class fileController {
    private DotClass Resp;

    @PostMapping("/upload")
    @ResponseBody
    public Result upload(@RequestParam("file") MultipartFile file) throws IOException {
        if (file.isEmpty()) {
            return ResultGenerator.genFailResult("文件为空");
        }
        // 拿到文件名
        String filename =new Date().getTime() + file.getOriginalFilename();

        // 存放上传图片的文件夹

        String fileDirPath = new String("src/main/resources/" + "static/upload/file");
        File fileDir = new File(fileDirPath);
        if (!fileDir.exists()) {
            // 递归生成文件夹
            fileDir.mkdirs();
        }

        // 输出文件夹绝对路径  -- 这里的绝对路径是相当于当前项目的路径而不是“容器”路径
        System.out.println(fileDir.getAbsolutePath());

        // 构建真实的文件路径
        File newFile = new File(fileDir.getAbsolutePath() + File.separator + filename);
        System.out.println(newFile.getAbsolutePath());
        // 上传图片到 -》 “绝对路径”
        file.transferTo(newFile);
        return ResultGenerator.genSuccessResult("/file/" + filename);

    }
}
