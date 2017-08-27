/**
 * Created by Administrator on 2017/8/27.
 */
//左侧列表
$('.three>li').click(function(){
    $(this).addClass('active').siblings('.active').removeClass('active')
    $(this).children('a').addClass('active').parent().siblings().children('.active').removeClass('active')
    $(this).children('a').children().addClass('active')
        .parent().parent().siblings().children().children('.active').removeClass('active')
    $(this).children('a').siblings().slideToggle()

})
$('.three>li>ul>li').click(function(){
    $(this).addClass('active').siblings('.active').removeClass('active')
    $(this).children().addClass('active').parent().children('.active').removeClass('active')
})






//修改密码
$('#header a').click(function () {
    $(this).siblings('.config').css('display','block').on('mouseleave',function(){
            $(this).css('display','none')
        })
})



//跳转
$('.config li:nth-child(2)').click(function(){
    window.location.href='password_config.html'
})
$('.config li:nth-child(3)').click(function(){
    window.location.href='login.html'
})


$('.three>li:nth-child(1)>ul>li:nth-child(1)').click(function(){
    window.location.href='latest_industry_info.html'
})
$('.three>li:nth-child(1)>ul>li:nth-child(2)').click(function(){
    window.location.href='non_industry_site_info.html'
})
$('.three>li:nth-child(1)>ul>li:nth-child(3)').click(function(){
    window.location.href='industry_site_info.html'
})
$('.three>li:nth-child(1)>ul>li:nth-child(4)').click(function(){
    window.location.href='voice_from_gov.html'
})
$('.three>li:nth-child(1)>ul>li:nth-child(5)').click(function(){
    window.location.href='direct_selling_enterprise.html'
})
$('.three>li:nth-child(1)>ul>li:nth-child(6)').click(function(){
    window.location.href='public_benefit.html'
})
$('.three>li:nth-child(1)>ul>li:nth-child(7)').click(function(){
    window.location.href='illegal_pyramid_selling.html'
})

$('.three>li:nth-child(2)>ul>li:nth-child(1)').click(function(){
    window.location.href='enterprise_info_config.html'
})
$('.three>li:nth-child(2)>ul>li:nth-child(2)').click(function(){
    window.location.href='my_enterprise_info.html'
})
$('.three>li:nth-child(2)>ul>li:nth-child(3)').click(function(){
    window.location.href='my_enterprise_brand.html'
})
$('.three>li:nth-child(2)>ul>li:nth-child(4)').click(function(){
    window.location.href='my_enterprise_product.html'
})
$('.three>li:nth-child(2)>ul>li:nth-child(5)').click(function(){
    window.location.href='my_enterprise_person.html'
})
$('.three>li:nth-child(2)>ul>li:nth-child(6)').click(function(){
    window.location.href='my_enterprise_badinfo.html'
})
$('.three>li:nth-child(2)>ul>li:nth-child(7)').click(function(){
    window.location.href='competitor_info.html'
})
$('.three>li:nth-child(2)>ul>li:nth-child(8)').click(function(){
    window.location.href='other_info.html'
})
$('.three>li:nth-child(2)>ul>li:nth-child(9)').click(function(){
    window.location.href='my_industry_index.html'
})
$('.three>li:nth-child(2)>ul>li:nth-child(10)').click(function(){
    window.location.href='competitor_index.html'
})
$('.three>li:nth-child(2)>ul>li:nth-child(11)').click(function(){
    window.location.href='others_index.html'
})

$('.three>li:nth-child(3)>ul>li:nth-child(1)').click(function(){
    window.location.href='industry.html'
})
$('.three>li:nth-child(3)>ul>li:nth-child(2)').click(function(){
    window.location.href='my_industry.html'
})





