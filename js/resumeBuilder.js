'use strict';
///////////////
//// Json
///////////////

// Bio
// Display function is added later for better readability, see "Display function" bellow.
var bio = {
  "name" : "付 辉",
  "role" : "Web Developer",
  "contacts" : {
        "mobile" : "13700261381",
        "email" : "fh408931@163.com",
        "github" : {
          "username" : "fh408931",
          "github_url" : "https://github.com/fh408931"
        },
        "location" : "陕西省汉中市",
        "blog" : "https://fh408931/github.io"
      },
  "welcomeMessage": "欢迎来到我的主页",
  "skills" : ["html", "CSS", "JavaScript", 'linux', 'java','vue','webpack'],
  "biopic" : "images/profile_pic.jpg"
};



//Work
var work = {
  "jobs" : [
    {
      "employer" : "北京思源科安技术有限公司",
      "title" : "Java web",
      "location" : "陕西西安",
      "dates" : "2015-2017",
      "description" : "开发煤矿工地虹膜考勤机后台管理项目，负责前后端，维护修改之前十几个老客户产品的bug,维护项目迭代更新，开发客户新的需求。",
      "url" : "javascript:void(0)"
    },
    {
      "employer" : "顺丰速运",
      "title" : "快递员",
      "location" : "广州天河",
      "dates" : "2010-2014",
      "description" : "超快节奏的工作，每天都是在和时间赛跑，时刻记住时效和服务质量，经常会有各个主管打来电话，运气好还会有经理办公室约谈。",
      "url" : "javascript:void(0)"
    }
  ]
};

//education
var education = {
  "schools" : [
    {
      "name" : "陕西职业技术学院",
      "location" : "陕西西安",
      "degree" : "大专",
      "majors" : ["工程", "汽车运用"],
      "dates" : "2007 - 2010",
      "url" : "http://www.spvec.com.cn/"
    }
  ],
  "onlineCourses": [
    {
      "title" : "Java web后端",
      "school" : "北京尚硅谷",
      "date" : "2014年开始，下载这个学校视屏学习",
      "url" : "http://www.atguigu.com/",
      "urlCourse" : "http://www.atguigu.com/download.shtml"
    },
    {
      "title" : "web前端",
      "school" : "mdn/learn-area",
      "date" : "2016年完成mdn学习Web开发内容",
      "url" : "https://developer.mozilla.org/zh-CN/",
      "urlCourse" : "https://developer.mozilla.org/zh-CN/docs/Learn"
    },
    {
        "title" : "web前端",
        "school" : "FreeCodeCamp",
        "date" : "2017年刷题网站",
        "url" : "https://FreeCodeCamp.org",
        "urlCourse" : "https://FreeCodeCamp.org"
    },
    {
        "title" : "web前端",
        "school" : "udacity",
        "date" : "2017学习了很多免费课程",
        "url" : "cn.udacity.com",
        "urlCourse" : "cn.udacity.com"
    },
    {
      "title" : "Linux",
      "school" : "慕课",
      "date" : "2017年vmware虚拟机装过两个系统centos，ubuntu用来开发",
      "url" : "https://www.imooc.com/",
      "urlCourse" : "https://www.imooc.com/"
    }
  ]
};

//projects
var projects = {
  "projects" : [
    {
      "title" : "西安特变电厂充电桩项目",
      "dates" : "2016",
      "description" : "项目前端使用easyui，后端spring+spring-jdbc，数据库mysql，redis<br>个人负责模块" +
      "：充电桩，充电站，用户管理，单一电价,分时电价<br>遇到的问题：<br>1:验证用户输入数据时，easyui的validatebox的实现方式" +
      "造成远程验证频繁发送请求，花了很长时间想修改验证方式没能实现然后自己写验证<br>2:充电站下辖的充电桩，数据库两张表充电桩，充电站," +
      "两表联合查询数据，还要去redis数据库取充电桩上枪的状态，封装好前台需要展示的数据<br>3:电价数据库有单一电价表分时电价表，时间区间表，" +
      "后端数据封装，保存，前端动态响应管理人员添加分时还是单一电价，分时电价根据用户选择在响应下一个时段这样循环<br>由于开发时间比较长了，关于数据库，后台，前端信息记得模糊了，只能写个大概",
      "images" : ["images/portfolio_website.jpg"],
      "url" : "javascript:void(0)"
    }
  ]
};

///////////////
//// Resume Display functions
///////////////

//Bio display function
bio.display = function(){
  var $skills = $('#skills');
  $('#bio-name').prepend(
      HTMLheaderName.replace('%data%', bio.name),
      HTMLheaderRole.replace('%data%', bio.role)
  );

  $('#topContacts, #footerContacts').append(
      HTMLemail.replace('%link%', bio.contacts['email']).replace('%data%', bio.contacts['email']),
      HTMLmobile.replace('%link%', bio.contacts['mobile']).replace('%data%', bio.contacts['mobile']),
      //HTMLtwitter.replace('%link%', bio.contacts.twitter['twitter_url']).replace('%data%', bio.contacts.twitter['username']),
      HTMLgithub.replace('%link%', bio.contacts.github['github_url']).replace('%data%', bio.contacts.github['username']),
      HTMLblog.replace('%link%', bio.contacts['blog']),
      HTMLlocation.replace('%data%', bio.contacts['location'])
  );

  $skills.before(HTMLbioPic.replace('%data%', bio.biopic));
  $skills.prepend(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

  if(bio.skills.length){
    $skills.append(HTMLskillsStart);
    $('#skills-list').append(function(){
      //constructs skills html
      var htmlToReturn = "";
      bio.skills.forEach(function(skill){
        htmlToReturn += HTMLskills.replace('%data%', skill);
      });//for loop ends

      return htmlToReturn;
    });
  }//if statment ends
};

//work display function
work.display = function(){
  if(work.jobs.length){
    work.jobs.forEach(function(job){
      $('#workExperience').append(HTMLworkStart);
      $('.work-entry:last').append(function(){
        var htmlToReturn = "";
        htmlToReturn += HTMLworkEmployer.replace('%#%', job.url).replace('%data%', job.employer);
        htmlToReturn += HTMLworkTitle.replace('%data%', job.title);
        htmlToReturn += HTMLworkDates.replace('%data%', job.dates);
        htmlToReturn += HTMLworkDescription.replace('%data%', job.description);
        htmlToReturn += HTMLworkLocation.replace('%data%', job.location);
        return htmlToReturn;
      });
    });//for loop ends
  }//if statment ends
};

//education display function
education.display = function(){
  var $education = $('#education');


  if(education.onlineCourses.length){
    //constructs education unit for online courses
    $education.append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course){
      $education.append(HTMLschoolStart);
      $('.education-entry:last').append(function(){
        var htmlToReturn = "";
        htmlToReturn += HTMLonlineTitle.replace('%#%', course.urlCourse).replace('%data%', course.title);
        htmlToReturn += HTMLonlineSchool.replace('%data%', course.school);
        htmlToReturn += HTMLonlineDates.replace('%data%', course.date);
        htmlToReturn += HTMLonlineURL.replace('%#%', course.url).replace('%data%', course.school);
        return htmlToReturn;
      });
    });//for loop ends
  }//if ends

    if(education.schools.length){
        //constructs education unit for schools
        education.schools.forEach(function(school){
            $education.append(HTMLschoolClasses);
            $education.append(HTMLschoolStart);
            $('.education-entry:last').append(function(){
                var htmlToReturn = "";
                htmlToReturn += HTMLschoolName.replace('%#%', school.url).replace('%data%', school.name);
                htmlToReturn += HTMLschoolDegree.replace('%data%', school.degree);
                htmlToReturn += HTMLschoolDates.replace('%data%', school.dates);
                htmlToReturn += HTMLschoolLocation.replace('%data%', school.location);
                htmlToReturn += HTMLschoolMajor.replace('%data%', school.majors);
                return htmlToReturn;
            });
        });//for loop ends
    }//if ends
};

//projects display function
projects.display = function(){

  //Returns built html for project`s images
  //@param: project
  function loopImages(project){
    if(project.length){
      var htmlToReturn = "";
      project.forEach(function(image){
        htmlToReturn += HTMLprojectImage.replace('%data%', image);
      });//for loop ends
      return htmlToReturn;
    }//if ends
  }//loopImages ends

  if(projects.projects.length){
    projects.projects.forEach(function(project){
      $('#projects').append(HTMLprojectStart);
      $('.project-entry:last').append(function(){
        var htmlToReturn = "";
        htmlToReturn += '<div class="project-info col-sm-6">';
        htmlToReturn += HTMLprojectTitle.replace('%#%', project.url).replace('%data%', project.title);
        htmlToReturn += HTMLprojectDates.replace('%data%', project.dates);
        htmlToReturn += HTMLprojectDescription.replace('%data%', project.description);
        htmlToReturn += '</div>';
        htmlToReturn += loopImages(project.images);
        return htmlToReturn;
      });
    });//for loop ends
  }//if ends
};

///////////////
//// Functions
///////////////

  //Off canvas menu
function mainNavigation(){
  //TODO: rethink the way its done, cut on selectors, improve reusability
  $('.icon-open').click(function(){
    $('#main-navigation').animate({"left":0});
    $(this).css("display", "none");
    $('.icon-close').css("display", "block");
    $('.nav-icon, #main').animate({"marginLeft": "300px"});
    if($(window).width() < 600){
      $('#bio-name').animate({"right": "-300"});
    }
  });

  $('.icon-close').click(function(){
    $('#main-navigation').animate({"left": '-=300'});
    $(this).css("display", "none");
    $('.icon-open').css("display", "block");
    $('.nav-icon, #main').animate({"marginLeft": '-=300'});
    $('#bio-name').animate({"right": 40});
  });
}

//smoothly scrolls to anchors on the page
//@param: duration
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );
      var scrollTo = (target.offset().top) - 200;

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: scrollTo
	        }, duration);
	    }
	});
}

///////////////
//// Resume builder
///////////////
bio.display();
work.display();
projects.display();
education.display();
//$('#mapDiv').append(googleMap);
//$('#main-navigation').append(internationalizeButton);

///////////////
//// Document ready
///////////////
$(document).ready(function(){

    mainNavigation();
    smoothScroll(1000);

});
