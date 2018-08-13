package com.example.jquery_ui;

import com.baidu.ueditor.um.Uploader;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

@Controller
public class MainController {

    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping("test")
    public String test() {
        return "test";
    }

    @RequestMapping("/ueditor/imageUp")
    @ResponseBody
    public String imageUpload(MultipartFile upfile, HttpServletRequest request) throws Exception {
        request.setCharacterEncoding("utf-8");
        Uploader up = new Uploader(request);
        up.setSavePath("upload");
        String[] fileType = {".gif", ".png", ".jpg", ".jpeg", ".bmp"};
        up.setAllowFiles(fileType);
        up.setMaxSize(10000); //单位KB
        up.upload(upfile);

        String callback = request.getParameter("callback");

        String result = "{\"name\":\"" + up.getFileName() + "\", \"originalName\": \"" + up.getOriginalName() + "\", \"size\": " + up.getSize() + ", \"state\": \"" + up.getState() + "\", \"type\": \"" + up.getType() + "\", \"url\": \"" + up.getUrl() + "\"}";

        result = result.replaceAll("\\\\", "\\\\");

        if (callback == null) {
            return result;
        } else {
            return "<script>" + callback + "(" + result + ")</script>";
        }
    }

}
