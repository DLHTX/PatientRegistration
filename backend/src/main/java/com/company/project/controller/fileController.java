package com.company.project.controller;

import com.company.project.core.Result;
import com.company.project.core.ResultGenerator;
import io.swagger.annotations.Api;
import org.apache.commons.logging.impl.SLF4JLog;
import org.apache.ibatis.javassist.runtime.DotClass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.*;

@Api("上传文件")
@RestController
@RequestMapping("/api/file")
public class fileController {
    private DotClass Resp;
    @Autowired
    public static String getRandomString(int length){
        String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        Random random=new Random();
        StringBuffer sb=new StringBuffer();
        for(int i=0;i<length;i++){
            int number=random.nextInt(62);
            sb.append(str.charAt(number));
        }
        return sb.toString();
    }

    @PostMapping("/upload")
    @ResponseBody
    public Result upload(@RequestParam("file") MultipartFile[] file) throws IOException {
        System.out.println(file);
        if(file.length > 0){
            String fileDirPath = new String("upload/file");
            File fileDir = new File(fileDirPath);
            if (!fileDir.exists()) {
                // 递归生成文件夹
                fileDir.mkdirs();
            }

            List<HashMap<String, Object>> listMap = new ArrayList<HashMap<String, Object>>();
            for (MultipartFile fileItem : file) {
                //创建map对象保存每一个文件的信息
                HashMap<String, Object> map = new HashMap<String,Object>();
                String oldName = fileItem.getOriginalFilename();//源文件名
                long size = fileItem.getSize();//文件大小
                String filename = getRandomString(5) + fileItem.getOriginalFilename();//现在的文件名
                File newFile = new File(fileDir.getAbsolutePath() + File.separator + filename);
                fileItem.transferTo(newFile);
                map.put("oldname",oldName);//文件原名称
                map.put("name",filename);//文件新名称
                map.put("url","/file/" + filename);
                listMap.add(map);
            }
            return ResultGenerator.genSuccessResult(listMap);
        }else{
            return ResultGenerator.genFailResult("没有上传任何文件");
        }
    }
}
