package com.example.jquery_ui;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping("/crewInfoList")
    public String crewInfoList() {
        return "crew/crewInfoList";
    }

}
