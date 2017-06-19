'use strict';
//添加全局过滤器资源
export default {
    install: function (Vue, options) {
       
            //过滤图片字符串中的地址，如果有图http则不加图片服务器地址，否则加上服务器地址
          Vue.filter('replaceImgSrc', function (src,size) {

              if(!src){
                  return ;
              }
              if(src.indexOf('http')>-1){
                  
                  return src

              }else{ 
                  if(size==100){
                      return '//sz.cnbooking.net'+ src;
              
                  }
                  var picName=src.split('.')[src.split('.').length-1];
                  return '//xx.net'+ src.replace(/(jpg|png|gif)$/i, 'auto.s'+size+'.'+picName);
              }

          }) ;
          //日期期格式化为 00月00日 
          Vue.filter('dateMMDD', function (date) {
              if(!date) return '';
              var da = new Date(date);
              var month = da.getMonth()+1+'-';
              var date = da.getDate()+'-';
             
              return month+date;

          })  ;
          //日期期格式化为 0000年00月
          Vue.filter('dateYYYYMM', function (date) {
              if(!date) return '';
            
              var da = new Date(date);
              var year=da.getFullYear()+'-';

              var month = da.getMonth()+1;

              if(month<10){month='0'+month};
              return year+month;

          }) ;
          //日期期格式化为 0000年00月00日
          Vue.filter('dateYYYYMMDD', function (date) {
              if(!date) return '';
            
              var da = new Date(date);
              var year=da.getFullYear()+'年';

              var month =  da.getMonth()+1+'月';
              var day = da.getDate()+'日';

              if(month<10){month='0'+month};
              return year+month+day;

          }) ;
          //日期期格式化为 0000-00-00- 00:00:00 
          Vue.filter('dateComplete', function (date) {

              var da = new Date(date);

              var year=da.getFullYear()+'-';
              var month = da.getMonth()+1+'-';
              var day = da.getDate()+' ';

              var hour = da.getHours()+':';
              var minutes = da.getMinutes()+':';
              var second = da.getSeconds()+'';
             
              return year+month+day+hour+minutes+second;
          }) ;
          //截取字符串长度,str为原字符串，length
          Vue.filter('stringLength', function (str,length) {

              
             var str=str;
             if(str.length>15){
              str=str.substring(0,15)+'...'

             }
              return str

          }) 
    }
};

