//与界面显示相关的函数

//第一层层级显示子节点函数
function show_first_child_list(obj, num) {
    if (document.getElementsByClassName("list_child")[num].style.display == 'block') {
        document.getElementsByClassName("list_child")[num].style.display = "none";
        obj.setAttribute("src", "../src/img/add.png");
    } else {
        document.getElementsByClassName("list_child")[num].style.display = "block";
        obj.setAttribute("src", "../src/img/subtract.png");
    }
}

//第二层级显示子节点函数
function show_second_child_list(obj, num) {
    if (document.getElementsByClassName("seen_child")[num].style.display == 'block') {
        document.getElementsByClassName("seen_child")[num].style.display = "none";
        obj.setAttribute("src", "../src/img/add.png");
    } else {
        document.getElementsByClassName("seen_child")[num].style.display = "block";
        obj.setAttribute("src", "../src/img/subtract.png");
    }
}

//第三层级显示子节点函数
function show_third_child_list(obj, num) {
    if (document.getElementsByClassName("third_child")[num].style.display == 'block') {
        document.getElementsByClassName("third_child")[num].style.display = 'none';
        obj.setAttribute("src", "../src/img/add.png");
    } else {
        document.getElementsByClassName("third_child")[num].style.display = 'block';
        obj.setAttribute("src", "../src/img/subtract.png");
    }

}


$(document).ready(function () {
    //定义总的可见、不可见控制子层级的可见、不可见的显示结果
    $('#vis_all').click(function () {//总按钮，可见，被选择后，所有的子可见按钮显示为true，不勾选为false
        if ($('#vis_all').is(":checked")) {
            //$('').prop("checked",true);
            //边镇城池的可见
            {
                $('#vis_liaodong').prop("checked", true);
                $('#vis_jizhen').prop("checked", true);
                $('#vis_xuanfu').prop("checked", true);
                $('#vis_datong').prop("checked", true);
                $('#vis_shanxi').prop("checked", true);
                $('#vis_yulin').prop("checked", true);
                $('#vis_ningxia').prop("checked", true);
                $('#vis_guyuan').prop("checked", true);
                $('#vis_gansu').prop("checked", true);
            }
            //驿传系统的可见
            {
                $('#vis_water_horse_delay').prop("checked", true);
                $('#vis_delivery_station').prop("checked", true);
                $('#vis_delivery_road').prop("checked", true);
            }
        } else {
            // $('').prop("checked",false);
            //边镇城池的不可见
            {
                $('#vis_liaodong').prop("checked", false);
                $('#vis_jizhen').prop("checked", false);
                $('#vis_xuanfu').prop("checked", false);
                $('#vis_datong').prop("checked", false);
                $('#vis_shanxi').prop("checked", false);
                $('#vis_yulin').prop("checked", false);
                $('#vis_ningxia').prop("checked", false);
                $('#vis_guyuan').prop("checked", false);
                $('#vis_gansu').prop("checked", false);
            }
            //驿传系统的不可见
            {
                $('#vis_water_horse_delay').prop("checked", false);
                $('#vis_delivery_station').prop("checked", false);
                $('#vis_delivery_road').prop("checked", false);
            }
        }
    });
    $('#un_vis_all').click(function () {//总按钮，可见，被选择后，所有的子可见按钮显示为true，不勾选为false
        if ($('#un_vis_all').is(":checked")) {
            //边镇城池的可见
            {
                $('#un_vis_liaodong').prop("checked", true);
                $('#un_vis_jizhen').prop("checked", true);
                $('#un_vis_xuanfu').prop("checked", true);
                $('#un_vis_datong').prop("checked", true);
                $('#un_vis_shanxi').prop("checked", true);
                $('#un_vis_yulin').prop("checked", true);
                $('#un_vis_ningxia').prop("checked", true);
                $('#un_vis_guyuan').prop("checked", true);
                $('#un_vis_gansu').prop("checked", true);
            }
            //驿传系统的可见
            {
                $('#un_vis_water_horse_delay').prop("checked", true);
                $('#un_vis_delivery_road').prop("checked", true);
                $('#un_vis_delivery_station').prop("checked", true);
            }
        } else {
            //边镇城池的不可见
            {
                $('#un_vis_liaodong').prop("checked", false);
                $('#un_vis_jizhen').prop("checked", false);
                $('#un_vis_xuanfu').prop("checked", false);
                $('#un_vis_datong').prop("checked", false);
                $('#un_vis_shanxi').prop("checked", false);
                $('#un_vis_yulin').prop("checked", false);
                $('#un_vis_ningxia').prop("checked", false);
                $('#un_vis_guyuan').prop("checked", false);
                $('#un_vis_gansu').prop("checked", false);
            }
            //驿传系统的不可见
            {
                $('#un_vis_water_horse_delay').prop("checked", false);
                $('#un_vis_delivery_road').prop("checked", false);
                $('#un_vis_delivery_station').prop("checked", false);
            }
        }
    });

    //定义边镇城池总项控制子项
    $('#old_city').click(function () {
        if ($('#old_city').is(":checked")) {
            //辽东镇及其下属城池
            {
                $('#liaodong').prop("checked", true);
                $('#liaodong_kaiyuan').prop("checked", true);
                $('#liaodong_aiyang').prop("checked", true);
                $('#liaodong_guangning').prop("checked", true);
                $('#liaodong_qiantun').prop("checked", true);
                $('#liaodong_yizhou').prop("checked", true);
                $('#liaodong_liaoyang').prop("checked", true);
            }
            //蓟镇及其下属城池
            {
                $('#jizhen').prop("checked", true);
                $('#jizhen_east').prop("checked", true);
                $('#jizhen_middle').prop("checked", true);
                $('#jizhen_west').prop("checked", true);
                $('#jizhen_shanhai').prop("checked", true);
                $('#jizhen_shanhai').prop("checked", true);
                $('#jizhen_shimen').prop("checked", true);
                $('#jizhen_yanhe').prop("checked", true);
                $('#jizhen_taiping').prop("checked", true);
                $('#jizhen_malan').prop("checked", true);
                $('#jizhen_xifeng').prop("checked", true);
                $('#jizhen_songpeng').prop("checked", true);
                $('#jizhen_qiangzi').prop("checked", true);
                $('#jizhen_gubeikou').prop("checked", true);
                $('#jizhen_shitang').prop("checked", true);
                $('#jizhen_caojia').prop("checked", true);
            }
            //宣府镇及其下属城池
            {
                $('#xuanfu').prop("checked", true);
                $('#xuanfu_bushulu').prop("checked", true);
                $('#xuanfu_shangxilu').prop("checked", true);
                $('#xuanfu_xiaxilu').prop("checked", true);
                $('#xuanfu_xiabeilu').prop("checked", true);
                $('#xuanfu_shangbeilu').prop("checked", true);
                $('#xuanfu_zhonglu').prop("checked", true);
                $('#xuanfu_east').prop("checked", true);
                $('#xuanfu_south').prop("checked", true);
                $('#xuanfu_nanshan').prop("checked", true);
            }
            //大同镇及其下属城池
            {
                $('#datong').prop("checked", true);
                $('#datong_xinping').prop("checked", true);
                $('#datong_east').prop("checked", true);
                $('#datong_north_east').prop("checked", true);
                $('#datong_north_west').prop("checked", true);
                $('#datong_zhonglu').prop("checked", true);
                $('#datong_weiyuan').prop("checked", true);
                $('#datong_west').prop("checked", true);
                $('#datong_jingping').prop("checked", true);
            }
            //山西镇及其下属城池
            {
                $('#shanxi').prop("checked", true);
                $('#shanxi_east').prop("checked", true);
                $('#shanxi_beilou').prop("checked", true);
                $('#shanxi_zhonglu').prop("checked", true);
                $('#shanxi_west').prop("checked", true);
                $('#shanxi_hebao').prop("checked", true);
            }
            //榆林镇及其下属城池
            {
                $('#yulin').prop("checked", true);
                $('#yulin_east').prop("checked", true);
                $('#yulin_zhonglu').prop("checked", true);
                $('#yulin_west').prop("checked", true);
            }
            //宁夏镇及其下属城池
            {
                $('#ningxia').prop("checked", true);
                $('#ningxia_east').prop("checked", true);
                $('#ningxia_zhonglu').prop("checked", true);
                $('#ningxia_north').prop("checked", true);
                $('#ningxia_south').prop("checked", true);
                $('#ningxia_west').prop("checked", true);
            }
            //固原镇及其下属城池
            {
                $('#guyuan').prop("checked", true);
                $('#guyuan_xiamafang').prop("checked", true);
                $('#guyuan_jinglu').prop("checked", true);
                $('#guyuan_lanzhou').prop("checked", true);
                $('#guyuan_hezhou').prop("checked", true);
                $('#guyuan_lutang').prop("checked", true);
            }
            //甘肃镇及其下属城池
            {
                $('#gansu').prop("checked", true);
                $('#gansu_zhuanglang').prop("checked", true);
                $('#gansu_dajing').prop("checked", true);
                $('#gansu_liangzhou').prop("checked", true);
                $('#gansu_zhenyu').prop("checked", true);
                $('#gansu_suzhou').prop("checked", true);
            }
        } else {
            //辽东镇及其下属城池
            {
                $('#liaodong').prop("checked", false);
                $('#liaodong_kaiyuan').prop("checked", false);
                $('#liaodong_aiyang').prop("checked", false);
                $('#liaodong_guangning').prop("checked", false);
                $('#liaodong_qiantun').prop("checked", false);
                $('#liaodong_yizhou').prop("checked", false);
                $('#liaodong_liaoyang').prop("checked", false);
            }
            //蓟镇及其下属城池
            {
                $('#jizhen').prop("checked", false);
                $('#jizhen_east').prop("checked", false);
                $('#jizhen_middle').prop("checked", false);
                $('#jizhen_west').prop("checked", false);
                $('#jizhen_shanhai').prop("checked", false);
                $('#jizhen_shanhai').prop("checked", false);
                $('#jizhen_shimen').prop("checked", false);
                $('#jizhen_yanhe').prop("checked", false);
                $('#jizhen_taiping').prop("checked", false);
                $('#jizhen_malan').prop("checked", false);
                $('#jizhen_xifeng').prop("checked", false);
                $('#jizhen_songpeng').prop("checked", false);
                $('#jizhen_qiangzi').prop("checked", false);
                $('#jizhen_gubeikou').prop("checked", false);
                $('#jizhen_shitang').prop("checked", false);
                $('#jizhen_caojia').prop("checked", false);
            }
            //宣府镇及其下属城池
            {
                $('#xuanfu').prop("checked", false);
                $('#xuanfu_bushulu').prop("checked", false);
                $('#xuanfu_shangxilu').prop("checked", false);
                $('#xuanfu_xiaxilu').prop("checked", false);
                $('#xuanfu_shangbeilu').prop("checked", false);
                $('#xuanfu_xiabeilu').prop("checked", false);
                $('#xuanfu_zhonglu').prop("checked", false);
                $('#xuanfu_east').prop("checked", false);
                $('#xuanfu_south').prop("checked", false);
                $('#xuanfu_nanshan').prop("checked", false);
            }
            //大同镇及其下属城池
            {
                $('#datong').prop("checked", false);
                $('#datong_xinping').prop("checked", false);
                $('#datong_east').prop("checked", false);
                $('#datong_north_east').prop("checked", false);
                $('#datong_north_west').prop("checked", false);
                $('#datong_zhonglu').prop("checked", false);
                $('#datong_weiyuan').prop("checked", false);
                $('#datong_west').prop("checked", false);
                $('#datong_jingping').prop("checked", false);
            }
            //山西镇及其下属城池
            {
                $('#shanxi').prop("checked", false);
                $('#shanxi_east').prop("checked", false);
                $('#shanxi_beilou').prop("checked", false);
                $('#shanxi_zhonglu').prop("checked", false);
                $('#shanxi_west').prop("checked", false);
                $('#shanxi_hebao').prop("checked", false);
            }
            //榆林镇及其下属城池
            {
                $('#yulin').prop("checked", false);
                $('#yulin_east').prop("checked", false);
                $('#yulin_zhonglu').prop("checked", false);
                $('#yulin_west').prop("checked", false);
            }
            //宁夏镇及其下属城池
            {
                $('#ningxia').prop("checked", false);
                $('#ningxia_east').prop("checked", false);
                $('#ningxia_zhonglu').prop("checked", false);
                $('#ningxia_north').prop("checked", false);
                $('#ningxia_south').prop("checked", false);
                $('#ningxia_west').prop("checked", false);
            }
            //固原镇及其下属城池
            {
                $('#guyuan').prop("checked", false);
                $('#guyuan_xiamafang').prop("checked", false);
                $('#guyuan_jinglu').prop("checked", false);
                $('#guyuan_lanzhou').prop("checked", false);
                $('#guyuan_hezhou').prop("checked", false);
                $('#guyuan_lutang').prop("checked", false);
            }
            //甘肃镇及其下属城池
            {
                $('#gansu').prop("checked", false);
                $('#gansu_zhuanglang').prop("checked", false);
                $('#gansu_dajing').prop("checked", false);
                $('#gansu_liangzhou').prop("checked", false);
                $('#gansu_zhenyu').prop("checked", false);
                $('#gansu_suzhou').prop("checked", false);
            }
        }
    });

    //辽东镇
    $('#liaodong').click(function () {
        if ($('#liaodong').is(":checked")) {//注意此处有冒号
            $('#liaodong_kaiyuan').prop("checked", true);
            $('#liaodong_aiyang').prop("checked", true);
            $('#liaodong_guangning').prop("checked", true);
            $('#liaodong_qiantun').prop("checked", true);
            $('#liaodong_yizhou').prop("checked", true);
            $('#liaodong_liaoyang').prop("checked", true);
        } else {
            $('#liaodong_kaiyuan').prop("checked", false);
            $('#liaodong_aiyang').prop("checked", false);
            $('#liaodong_guangning').prop("checked", false);
            $('#liaodong_qiantun').prop("checked", false);
            $('#liaodong_yizhou').prop("checked", false);
            $('#liaodong_liaoyang').prop("checked", false);
        }
    });

    //蓟镇
    $('#jizhen').click(function () {
        if ($('#jizhen').is(":checked")) {
            //蓟镇第二级元素
            {
                $('#jizhen_east').prop("checked", true);
                $('#jizhen_middle').prop("checked", true);
                $('#jizhen_west').prop("checked", true);
            }
            //蓟镇第三级元素
            {
                $('#jizhen_shanhai').prop("checked", true);
                $('#jizhen_shimen').prop("checked", true);
                $('#jizhen_taitou').prop("checked", true);
                $('#jizhen_yanhe').prop("checked", true);
                $('#jizhen_taiping').prop("checked", true);
                $('#jizhen_malan').prop("checked", true);
                $('#jizhen_xifeng').prop("checked", true);
                $('#jizhen_songpeng').prop("checked", true);
                $('#jizhen_qiangzi').prop("checked", true);
                $('#jizhen_gubeikou').prop("checked", true);
                $('#jizhen_shitang').prop("checked", true);
                $('#jizhen_caojia').prop("checked", true);
            }
        } else {
            //蓟镇第二级元素
            {
                $('#jizhen_east').prop("checked", false);
                $('#jizhen_middle').prop("checked", false);
                $('#jizhen_west').prop("checked", false);
            }
            //蓟镇第三级元素
            {
                $('#jizhen_shanhai').prop("checked", false);
                $('#jizhen_shimen').prop("checked", false);
                $('#jizhen_taitou').prop("checked", false);
                $('#jizhen_yanhe').prop("checked", false);
                $('#jizhen_taiping').prop("checked", false);
                $('#jizhen_malan').prop("checked", false);
                $('#jizhen_xifeng').prop("checked", false);
                $('#jizhen_songpeng').prop("checked", false);
                $('#jizhen_qiangzi').prop("checked", false);
                $('#jizhen_gubeikou').prop("checked", false);
                $('#jizhen_shitang').prop("checked", false);
                $('#jizhen_caojia').prop("checked", false);
            }
        }
    });
    //蓟镇第三级系统
    $('#jizhen_east').click(function () {
        if ($('#jizhen_east').is(":checked")) {
            $('#jizhen_shanhai').prop("checked", true);
            $('#jizhen_shimen').prop("checked", true);
            $('#jizhen_taitou').prop("checked", true);
            $('#jizhen_yanhe').prop("checked", true);
        } else {
            $('#jizhen_shanhai').prop("checked", false);
            $('#jizhen_shimen').prop("checked", false);
            $('#jizhen_taitou').prop("checked", false);
            $('#jizhen_yanhe').prop("checked", false);
        }
    });
    $('#jizhen_middle').click(function () {
        if ($('#jizhen_middle').is(":checked")) {
            $('#jizhen_taiping').prop("checked", true);
            $('#jizhen_malan').prop("checked", true);
            $('#jizhen_xifeng').prop("checked", true);
            $('#jizhen_songpeng').prop("checked", true);
        } else {
            $('#jizhen_taiping').prop("checked", false);
            $('#jizhen_malan').prop("checked", false);
            $('#jizhen_xifeng').prop("checked", false);
            $('#jizhen_songpeng').prop("checked", false);

        }
    });
    $('#jizhen_west').click(function () {
        if ($('#jizhen_west').is(":checked")) {
            $('#jizhen_qiangzi').prop("checked", true);
            $('#jizhen_gubeikou').prop("checked", true);
            $('#jizhen_shitang').prop("checked", true);
            $('#jizhen_caojia').prop("checked", true);
        } else {
            $('#jizhen_qiangzi').prop("checked", false);
            $('#jizhen_gubeikou').prop("checked", false);
            $('#jizhen_shitang').prop("checked", false);
            $('#jizhen_caojia').prop("checked", false);
        }
    })

    //宣府镇
    $('#xuanfu').click(function () {
        if ($('#xuanfu').is(":checked")) {
            $('#xuanfu_bushulu').prop("checked", true);
            $('#xuanfu_shangxilu').prop("checked", true);
            $('#xuanfu_xiaxilu').prop("checked", true);
            $('#xuanfu_xiabeilu').prop("checked", true);
            $('#xuanfu_shangbeilu').prop("checked", true);
            $('#xuanfu_zhonglu').prop("checked", true);
            $('#xuanfu_east').prop("checked", true);
            $('#xuanfu_south').prop("checked", true);
            $('#xuanfu_nanshan').prop("checked", true);
        } else {
            $('#xuanfu_bushulu').prop("checked", false);
            $('#xuanfu_shangxilu').prop("checked", false);
            $('#xuanfu_xiaxilu').prop("checked", false);
            $('#xuanfu_shangbeilu').prop("checked", false);
            $('#xuanfu_xiabeilu').prop("checked", false);
            $('#xuanfu_zhonglu').prop("checked", false);
            $('#xuanfu_east').prop("checked", false);
            $('#xuanfu_south').prop("checked", false);
            $('#xuanfu_nanshan').prop("checked", false);
        }
    });

    //大同镇
    $('#datong').click(function () {
        if ($('#datong').is(":checked")) {
            $('#datong_xinping').prop("checked", true);
            $('#datong_east').prop("checked", true);
            $('#datong_north_east').prop("checked", true);
            $('#datong_north_west').prop("checked", true);
            $('#datong_zhonglu').prop("checked", true);
            $('#datong_weiyuan').prop("checked", true);
            $('#datong_west').prop("checked", true);
            $('#datong_jingping').prop("checked", true);
        } else {
            $('#datong_xinping').prop("checked", false);
            $('#datong_east').prop("checked", false);
            $('#datong_north_east').prop("checked", false);
            $('#datong_north_west').prop("checked", false);
            $('#datong_zhonglu').prop("checked", false);
            $('#datong_weiyuan').prop("checked", false);
            $('#datong_west').prop("checked", false);
            $('#datong_jingping').prop("checked", false);
        }
    });

    //山西镇
    $('#shanxi').click(function () {
        if ($('#shanxi').is(":checked")) {
            $('#shanxi_east').prop("checked", true);
            $('#shanxi_beilou').prop("checked", true);
            $('#shanxi_zhonglu').prop("checked", true);
            $('#shanxi_west').prop("checked", true);
            $('#shanxi_hebao').prop("checked", true);
        } else {
            $('#shanxi_east').prop("checked", false);
            $('#shanxi_beilou').prop("checked", false);
            $('#shanxi_zhonglu').prop("checked", false);
            $('#shanxi_west').prop("checked", false);
            $('#shanxi_hebao').prop("checked", false);
        }
    });

    //榆林镇
    $('#yulin').click(function () {
        if ($('#yulin').is(":checked")) {
            $('#yulin_east').prop("checked", true);
            $('#yulin_zhonglu').prop("checked", true);
            $('#yulin_west').prop("checked", true);
        } else {
            $('#yulin_east').prop("checked", false);
            $('#yulin_zhonglu').prop("checked", false);
            $('#yulin_west').prop("checked", false);
        }
    });

    //宁夏镇
    $('#ningxia').click(function () {
        if ($('#ningxia').is(":checked")) {
            $('#ningxia_east').prop("checked", true);
            $('#ningxia_zhonglu').prop("checked", true);
            $('#ningxia_north').prop("checked", true);
            $('#ningxia_south').prop("checked", true);
            $('#ningxia_west').prop("checked", true);
        } else {
            $('#ningxia_east').prop("checked", false);
            $('#ningxia_zhonglu').prop("checked", false);
            $('#ningxia_north').prop("checked", false);
            $('#ningxia_south').prop("checked", false);
            $('#ningxia_west').prop("checked", false);
        }
    });

    //固原镇
    $('#guyuan').click(function () {
        if ($('#guyuan').is(":checked")) {
            $('#guyuan_xiamafang').prop("checked", true);
            $('#guyuan_jinglu').prop("checked", true);
            $('#guyuan_lanzhou').prop("checked", true);
            $('#guyuan_hezhou').prop("checked", true);
            $('#guyuan_lutang').prop("checked", true);
        } else {
            $('#guyuan_xiamafang').prop("checked", false);
            $('#guyuan_jinglu').prop("checked", false);
            $('#guyuan_lanzhou').prop("checked", false);
            $('#guyuan_hezhou').prop("checked", false);
            $('#guyuan_lutang').prop("checked", false);
        }
    });

    //甘肃镇
    $('#gansu').click(function () {
        if ($('#gansu').is(":checked")) {
            $('#gansu_zhuanglang').prop("checked", true);
            $('#gansu_dajing').prop("checked", true);
            $('#gansu_liangzhou').prop("checked", true);
            $('#gansu_zhenyu').prop("checked", true);
            $('#gansu_suzhou').prop("checked", true);
        } else {
            $('#gansu_zhuanglang').prop("checked", false);
            $('#gansu_dajing').prop("checked", false);
            $('#gansu_liangzhou').prop("checked", false);
            $('#gansu_zhenyu').prop("checked", false);
            $('#gansu_suzhou').prop("checked", false);
        }
    });

    //长城本体，总的显示按钮，控制两级系统
    $('#the_all_wall').click(function () {
        if ($('#the_all_wall').is(":checked")) {
            //长城墙体
            {
                $('#the_each_wall').prop("checked", true);
                $('#cob_wall').prop("checked", true);
                $('#stone_wall').prop("checked", true);
                $('#brick_wall').prop("checked", true);
                $('#precipitous_wall').prop("checked", true);
                $('#precipitous').prop("checked", true);
                $('#risk_river').prop("checked", true);
                $('#other_wall').prop("checked", true);
                $('#disappear_wall').prop("checked", true);
            }
            //界壕壕堑
            {
                $('#boundary').prop("checked", true);
                $('#boundary_vis').prop("checked", true);
                $('#boundary_unvis').prop("checked", true);
            }
            //墙上单体
            {
                $('#on_the_wall').prop("checked", true);
                $('#enemy_tower').prop("checked", true);
                $('#horse_face').prop("checked", true);
                $('#water_door_on_wall').prop("checked", true);
                $('#gate_tower').prop("checked", true);
                $('#shop_room').prop("checked", true);
                $('#smoke_tower').prop("checked", true);
                $('#secret_door').prop("checked", true);
            }
            //墙外单体
            {
                $('#outside_the_wall').prop("checked", true);
                $('#pier').prop("checked", true);
                $('#smoke_tower_out_wall').prop("checked", true);
                $('#other_arch').prop("checked", true);
            }
        } else {
            //长城墙体
            {
                $('#the_each_wall').prop("checked", false);
                $('#cob_wall').prop("checked", false);
                $('#stone_wall').prop("checked", false);
                $('#brick_wall').prop("checked", false);
                $('#precipitous_wall').prop("checked", false);
                $('#precipitous').prop("checked", false);
                $('#risk_river').prop("checked", false);
                $('#other_wall').prop("checked", false);
                $('#disappear_wall').prop("checked", false);
            }
            //界壕壕堑
            {
                $('#boundary').prop("checked", false);
                $('#boundary_vis').prop("checked", false);
                $('#boundary_unvis').prop("checked", false);
            }
            //墙上单体
            {
                $('#on_the_wall').prop("checked", false);
                $('#enemy_tower').prop("checked", false);
                $('#horse_face').prop("checked", false);
                $('#water_door_on_wall').prop("checked", false);
                $('#gate_tower').prop("checked", false);
                $('#shop_room').prop("checked", false);
                $('#smoke_tower').prop("checked", false);
                $('#secret_door').prop("checked", false);
            }
            //墙外单体
            {
                $('#outside_the_wall').prop("checked", false);
                $('#pier').prop("checked", false);
                $('#smoke_tower_out_wall').prop("checked", false);
                $('#other_arch').prop("checked", false);
            }
        }
    });

    //长城墙体
    $('#the_each_wall').click(function () {
        if ($('#the_each_wall').is(":checked")) {
            $('#cob_wall').prop("checked", true);
            $('#stone_wall').prop("checked", true);
            $('#brick_wall').prop("checked", true);
            $('#precipitous_wall').prop("checked", true);
            $('#precipitous').prop("checked", true);
            $('#risk_river').prop("checked", true);
            $('#other_wall').prop("checked", true);
            $('#disappear_wall').prop("checked", true);
        } else {
            $('#cob_wall').prop("checked", false);
            $('#stone_wall').prop("checked", false);
            $('#brick_wall').prop("checked", false);
            $('#precipitous_wall').prop("checked", false);
            $('#precipitous').prop("checked", false);
            $('#risk_river').prop("checked", false);
            $('#other_wall').prop("checked", false);
            $('#disappear_wall').prop("checked", false);
        }
    });

    //界壕壕堑
    $('#boundary').click(function () {
        if ($('#boundary').is(":checked")) {
            $('#boundary_vis').prop("checked", true);
            $('#boundary_unvis').prop("checked", true);
        } else {
            $('#boundary_vis').prop("checked", false);
            $('#boundary_unvis').prop("checked", false);
        }
    });

    //墙上单体
    $('#on_the_wall').click(function () {
        if ($('#on_the_wall').is(":checked")) {
            $('#enemy_tower').prop("checked", true);
            $('#horse_face').prop("checked", true);
            $('#water_door_on_wall').prop("checked", true);
            $('#gate_tower').prop("checked", true);
            $('#shop_room').prop("checked", true);
            $('#smoke_tower').prop("checked", true);
            $('#secret_door').prop("checked", true);
        } else {
            $('#enemy_tower').prop("checked", false);
            $('#horse_face').prop("checked", false);
            $('#water_door_on_wall').prop("checked", false);
            $('#gate_tower').prop("checked", false);
            $('#shop_room').prop("checked", false);
            $('#smoke_tower').prop("checked", false);
            $('#secret_door').prop("checked", false);
        }
    });

    //墙外单体
    $('#outside_the_wall').click(function () {
        if ($('#outside_the_wall').is(":checked")) {
            $('#pier').prop("checked", true);
            $('#smoke_tower_out_wall').prop("checked", true);
            $('#other_arch').prop("checked", true);
        } else {
            $('#pier').prop("checked", false);
            $('#smoke_tower_out_wall').prop("checked", false);
            $('#other_arch').prop("checked", false);
        }
    });

    //关隘
    $('#guanai').click(function () {
        if ($('#guanai').is(":checked")) {
            $('#water_door').prop('checked', true);
            $('#door_city').prop('checked', true);
            $('#door_pass').prop('checked', true);
        } else {
            $('#water_door').prop('checked', false);
            $('#door_city').prop('checked', false);
            $('#door_pass').prop('checked', false);
        }
    });

    //驿传系统,总的，控制两级项目显示
    $('#relay_system').click(function () {
        if ($('#relay_system').is(":checked")) {
            //水马驿
            {
                $("#water_horse_relay").prop("checked", true);
                $("#land_relay").prop("checked", true);
                $("#water_relay").prop("checked", true);
            }
            //递运所
            {
                $("#delivery_station").prop("checked", true);
                $("#land_delivery_station").prop("checked", true);
                $("#water_delivery_station").prop("checked", true);
            }
            //急递铺
            {
                $("#fast_delivery_station").prop("checked", true);
            }
            //驿路
            {
                $("#delivery_road").prop("checked", true);
            }
        } else {
            //水马驿
            {
                $("#water_horse_relay").prop("checked", false);
                $("#land_relay").prop("checked", false);
                $("#water_relay").prop("checked", false);
            }
            //递运所
            {
                $("#delivery_station").prop("checked", false);
                $("#land_delivery_station").prop("checked", false);
                $("#water_delivery_station").prop("checked", false);
            }
            //急递铺
            {
                $("#fast_delivery_station").prop("checked", false);
            }
            //驿路
            {
                $("#delivery_road").prop("checked", false);
            }
        }
    });

    //水马驿
    $("#water_horse_relay").click(function () {
        if ($("#water_horse_relay").is(":checked")) {
            $("#land_relay").prop("checked", true);
            $("#water_relay").prop("checked", true);
        } else {
            $("#land_relay").prop("checked", false);
            $("#water_relay").prop("checked", false);
        }
    });

    //递运所
    $("#delivery_station").click(function () {
        if ($("#delivery_station").is(":checked")) {
            $("#land_delivery_station").prop("checked", true);
            $("#water_delivery_station").prop("checked", true);
        } else {
            $("#land_delivery_station").prop("checked", false);
            $("#water_delivery_station").prop("checked", false);
        }
    });

    //控制朝代时间进度条的显示
    // {
    //     var timeLineBar = $('#timeLineBar');
    //     var timeLineBarColor = $('#timeLineBarColor');
    //     var timeLineBarBtn = $('#timeLineBarBtn');
    //     var statu = false;
    //     var ox = 0;
    //     var lx = 0;
    //     var left = 0;
    //     var bgleft = 0;
    //
    //     timeLineBarBtn.mousedown(function (e) {
    //         lx = timeLineBarBtn.offset().left;
    //         ox = e.pageX - left;
    //         statu = true;
    //     });
    //     $(document).mouseup(function () {
    //         statu = false;
    //     });
    //
    //     timeLineBar.mousemove(function (e) {
    //         if (statu) {
    //             left = e.pageX - ox;
    //             if (left < 0) {
    //                 left = 0;
    //             }
    //             if (left > timeLineBar.width()) {
    //                 left = timeLineBar.width();
    //             }
    //             timeLineBarBtn.css('left', left);
    //             timeLineBarColor.width(left);
    //         }
    //     });
    //
    //     timeLineBar.click(function (e) {
    //         if (!statu) {
    //             bgleft = timeLineBar.offset().left;
    //             left = e.pageX - bgleft;
    //
    //             if (left < 0) {
    //                 left = 0;
    //             }
    //             if (left > timeLineBar.width()) {
    //                 left = timeLineBar.width();
    //             }
    //             timeLineBarBtn.css('left', left);
    //             timeLineBarColor.stop().animate({width: left}, 200);
    //         }
    //     });
    // }
    //朝代时间进度条与文字显示对应关系
    // $(function time_position() {
    //
    //     var leftAge = 0;
    //     var AgeContent = 0;
    //     var leftName = 0;
    //     var betweenLength = 0;
    //     var LastAgeContent = 0;
    //     var NextAgeContent = 0;
    //     var NextLeftAge = 0;
    //     right_length = timeLineBar.width() - 20;
    //     firstAge = $("#timeTableAge td").offset().left;
    //
    //     $("#timeTableName td").each(function (index) {
    //         console.log($("#timeTableAge td").eq(index).offset().left);
    //         AgeContent = $("#timeTableAge td").eq(index).html();
    //         leftAge = firstAge + right_length * (AgeContent - 1368) / 276;
    //         $("#timeTableAge td").eq(index).offset({left: leftAge});
    //
    //         NextAgeContent = $("#timeTableAge td").eq(index + 1).html();
    //         NextLeftAge = firstAge + right_length * (NextAgeContent - 1368) / 276;
    //         $("#timeTableAge td").eq(index + 1).offset({left: NextLeftAge});
    //
    //         betweenLength = right_length * (NextAgeContent - 1368) / 276 - right_length * (AgeContent - 1368) / 276;
    //         if (betweenLength < 30) {
    //             $(this).hide();
    //         }
    //         leftName = $("#timeTableAge td").eq(index).offset().left + ($("#timeTableAge td").eq(index + 1).offset().left - $("#timeTableAge td").eq(index).offset().left) / 2;
    //         $(this).offset({left: leftName});
    //     });
    //     AgeContent = 0;
    //     betweenLength = 0;
    //     $("#timeTableAge td").each(function (index) {
    //         // console.log($(this).offset().left);
    //         // console.log($(this).html());
    //         AgeContent = $(this).html();
    //         if (index != 0) {
    //             LastAgeContent = $("#timeTableAge td").eq(index - 1).html();
    //             // console.log(LastAgeContent);
    //         }
    //         leftAge = firstAge + right_length * (AgeContent - 1368) / 276;
    //         betweenLength = right_length * (AgeContent - 1368) / 276 - right_length * (LastAgeContent - 1368) / 276;
    //         if (betweenLength < 50) {
    //             $(this).hide();
    //         }
    //         $(this).offset({left: leftAge});
    //         // console.log($(this).offset().left);
    //         // console.log($("#timeTableName td").eq(index).offset().left);
    //     });
    //
    // });

    // function time_change() {
    //     console.log($(window).height());
    //     console.log($("#timeTableName").css("width"));
    // }
    // var resizeTimer = null;
    // $(window).bind('resize', function () {
    //     if (resizeTimer) clearTimeout(resizeTimer);
    //     resizeTimer = setTimeout(function () {
    //         console.log("窗口改变了");
    //         time_change();
    //     }, 300);
    //
    // });

    {
        //可用于监听div属性变化
        // var MutationObserver = window.MutationObserver ||
        //     window.WebKitMutationObserver ||
        //     window.MozMutationObserver;
        //
        // var mutationObserverSupport = !!MutationObserver;//如果支持mutationObserve则为true
        //
        // //构造一个回调函数
        // var callback=function (records) {
        //     records.map(function (records) {
        //         console.log('length value:'+records.oldValue);
        //     });
        // };
        //
        // var observer = new MutationObserver(callback);
        //
        // var article = document.getElementById("timeLine");
        //
        // var options = {
        //     'arrtibutes': true,//监听属性的变动
        //     //记录变动前的属性值
        //     'attributeOldValue':true
        // };
        //
        // observer.observe(article, options);
    }
    //朝代时间对应
    {
        timeLineChange=function time_position() {

            {
                var timeLineBar = $('#timeLineBar');
                var timeLineBarColor = $('#timeLineBarColor');
                var timeLineBarBtn = $('#timeLineBarBtn');
                var statu = false;
                var ox = 0;
                var lx = 0;
                var left = 0;
                var bgleft = 0;

                timeLineBarBtn.mousedown(function (e) {
                    lx = timeLineBarBtn.offset().left;
                    ox = e.pageX - left;
                    statu = true;
                });
                $(document).mouseup(function () {
                    statu = false;
                });

                timeLineBar.mousemove(function (e) {
                    if (statu) {
                        left = e.pageX - ox;
                        if (left < 0) {
                            left = 0;
                        }
                        if (left > timeLineBar.width()) {
                            left = timeLineBar.width();
                        }
                        timeLineBarBtn.css('left', left+20);
                        timeLineBarColor.width(left);
                    }
                });

                timeLineBar.click(function (e) {
                    if (!statu) {
                        bgleft = timeLineBar.offset().left;
                        left = e.pageX - bgleft;

                        if (left < 0) {
                            left = 0;
                        }
                        if (left > timeLineBar.width()) {
                            left = timeLineBar.width();
                        }
                        timeLineBarBtn.css('left', left+20);
                        timeLineBarColor.stop().animate({width: left}, 200);
                    }
                });
            }

        var leftAge = 0;
        var AgeContent = 0;
        var leftName = 0;
        var betweenLength = 0;
        var LastAgeContent = 0;
        var NextAgeContent = 0;
        var NextLeftAge = 0;
        right_length = timeLineBar.width() - 20;
        firstAge = $("#timeTableAge td").offset().left;
        console.log("firstAge"+firstAge);

        $("#timeTableName td").each(function (index) {
            // console.log($("#timeTableAge td").eq(index).offset().left);
            AgeContent = $("#timeTableAge td").eq(index).html();
            leftAge = firstAge + right_length * (AgeContent - 1368) / 276;
            $("#timeTableAge td").eq(index).offset({left: leftAge});

            NextAgeContent = $("#timeTableAge td").eq(index + 1).html();
            NextLeftAge = firstAge + right_length * (NextAgeContent - 1368) / 276;
            $("#timeTableAge td").eq(index + 1).offset({left: NextLeftAge});

            betweenLength = right_length * (NextAgeContent - 1368) / 276 - right_length * (AgeContent - 1368) / 276;
            if (betweenLength < 30) {
                $(this).hide();
            }
            leftName = $("#timeTableAge td").eq(index).offset().left + ($("#timeTableAge td").eq(index + 1).offset().left - $("#timeTableAge td").eq(index).offset().left) / 2;
            $(this).offset({left: leftName});
        });
        AgeContent = 0;
        betweenLength = 0;
        $("#timeTableAge td").each(function (index) {
            // console.log($(this).offset().left);
            // console.log($(this).html());
            AgeContent = $(this).html();
            if (index != 0) {
                LastAgeContent = $("#timeTableAge td").eq(index - 1).html();
                // console.log(LastAgeContent);
            }
            leftAge = firstAge + right_length * (AgeContent - 1368) / 276;
            betweenLength = right_length * (AgeContent - 1368) / 276 - right_length * (LastAgeContent - 1368) / 276;
            if (betweenLength < 50) {
                $(this).hide();
            }
            $(this).offset({left: leftAge});
            // console.log($(this).offset().left);
            // console.log($("#timeTableName td").eq(index).offset().left);
        });
        }
        $(timeLineChange());
    }

    //设置mark对话框
    {
        //弹出对话框编辑页面
        $("#markBtn").click(function () {
            $("#markDialog").css("display",'block');
            //关闭其他对话框
            $("#popDialog").css("display",'none');
            $("#findLatLongDialog").css("display",'none');
            autoCenter($("#markDialog"),$("#markDialog"));
            $("#markDialogSmallBtn").css("display",'none');
        });

        //关闭
        $(".DialogClose").click(function () {
            $(".Dialog").css("display",'none');
            // map.removeLayer(vector);
            map.removeInteraction(draw);
        });
        //缩小
        $("#markDialogToBtn").click(function () {
            $(".Dialog").css("display",'none');
            $("#markDialogSmallBtn").css("display",'block');
        });
        //点击缩小按钮，还原mark对话框
        $("#markDialogSmallBtn").click(function () {
            $("#markDialog").css("display",'block');
            autoCenter($("#markDialog"),$("#markDialog"));
            $("#markDialogSmallBtn").css("display",'none');
        });

        //js更改css属性的优先级较高
        $(".ol-overlaycontainer-stopevent").css("z-index","20");
    }

    //设置点属性查询对话框
    {
        //弹出查询属性对话框
        $("#popEachBtn").click(function () {
            $("#popDialog").css("display",'block');
            //关闭其他对话框
            $("#markDialog").css("display",'none');
            $("#findLatLongDialog").css("display",'none');
            autoCenter($("#popDialog"),$("#popDialog"));
            $("#popDialogSmallBtn").css("display",'none');
        });

        //缩小
        $("#popDialogToBtn").click(function () {
            $(".Dialog").css("display",'none');
            $("#popDialogSmallBtn").css("display",'block');
        });
        //点击缩小按钮，还原mark对话框
        $("#popDialogSmallBtn").click(function () {
            $("#popDialog").css("display",'block');
            autoCenter($("#popDialog"),$("#popDialog"));
            $("#popDialogSmallBtn").css("display",'none');
        });
    }

    //设置经纬度查询对话框
    {
        //弹出查询属性对话框
        $("#findLatLong").click(function () {
            $("#findLatLongDialog").css("display",'block');
            //关闭其他对话框
            $("#markDialog").css("display",'none');
            $("#markDialog").css("display",'none');
            autoCenter($("#findLatLongDialog"),$("#findLatLongDialog"));
            $("#findLatLongDialogSmallBtn").css("display",'none');
        });

        //缩小
        $("#findLatLongDialogToBtn").click(function () {
            $(".Dialog").css("display",'none');
            $("#findLatLongDialogSmallBtn").css("display",'block');
        });
        //点击缩小按钮，还原mark对话框
        $("#findLatLongDialogSmallBtn").click(function () {
            $("#findLatLongDialog").css("display",'block');
            autoCenter($("#findLatLongDialog"),$("#findLatLongDialog"));
            $("#findLatLongDialogSmallBtn").css("display",'none');
        });
    }

    //展示下一页
    {
        $("#next_page_left").click(function () {
            if(this.innerHTML=="下一页"){
                console.log(this.innerHTML="上一页");
                $("#first_left").css("display","none");
                $("#second_left").css("display","block");
            }
            else{
                this.innerHTML="下一页";
                $("#first_left").css("display","block");
                $("#second_left").css("display","none");
            }
        })
    }

});
var timeLineChange;
//侧边栏显示效果
function showLeftMenu() {
    // var right_width = $("#header").css("width");
    if ($(".leftPage").css("margin-left") == "0px") {
        $(".leftPage").css("margin-left", "-300px");
        $("#BtnTimeMenubtn").css("left", "-300px");
        $("#timeLine").css("margin-left","10px");
        $("#timeLine").css("width","1690px");
        $("#OverviewMap").css("left","10px");

    } else {
        $(".leftPage").css("margin-left", "0px");
        $("#BtnTimeMenubtn").css("left", "0px");
        $("#timeLine").css("margin-left","310px");
        $("#timeLine").css("width","1390px");
        $("#OverviewMap").css("left","310px");

        // $("#timeLine").css("width","100%");
    }
}

//下边栏时间轴显示效果
function showTimeMenu() {
    if ($("#timeLine").css("display") == "block") {
        console.log("timeLine");
        $("#timeLine").css("display", "none");
        $("#BtnTimeMenubtn").css("top", "-120px");
    } else {
        $("#timeLine").css("display", "block");
        $("#BtnTimeMenubtn").css("top", "-220px");
    }
}

//右上角工具栏展示收起效果
function showRightMenu(){
    if($("#rightMenu").css("display")=="block"){
        console.log('ttt');
        $("#rightMenu").css("display","none");
        // $("#rightMenu").css("left","1275px");
        $("#BtnRightMenubtn").css("left","410px");
    }
    else{
        $("#rightMenu").css("display","block");
        $("#BtnRightMenubtn").css("left","-15px");
    }
}

//拖动效果的函数
$(document).ready(dragDialog($("#popDialog")));
$(document).ready(dragDialog($("#markDialog")));
$(document).ready(dragDialog($("#findLatLongDialog")));

//自动居中对话框
function autoCenter(el,$dialog){
    var bodyW = $(window).width();
    var bodyH = $(window).height();
    var elW = el.width();
    var elH = el.height();
    $dialog.css({"left":(bodyW-elW)/2 + 'px',"top":(bodyH-elH)/2 + 'px'});
}

function dragDialog($dialog){
    // var $dialog = $(".Dialog");
    // var $mask = $("#mask");



    // //点击弹出对话框
    // $("#callout").click(function(){
    //     $dialog.css("display","block");
    //     $mask.css("display","block");
    //     autoCenter($dialog);
    // });

    //禁止选中对话框内容
    if(document.attachEvent) {//ie的事件监听，拖拽div时禁止选中内容，firefox与chrome已在css中设置过-moz-user-select: none; -webkit-user-select: none;
        g('dialog').attachEvent('onselectstart', function() {
            return false;
        });
    }
    //声明需要用到的变量
    var mx = 0,my = 0;      //鼠标x、y轴坐标（相对于left，top）
    var dx = 0,dy = 0;      //对话框坐标（同上）
    var isDraging = false;      //不可拖动

    //鼠标按下
    $(".title_Dialog").mousedown(function(e){
        e = e || window.event;
        mx = e.pageX;     //点击时鼠标X坐标
        my = e.pageY;     //点击时鼠标Y坐标
        dx = $dialog.offset().left;
        dy = $dialog.offset().top;
        isDraging = true;      //标记对话框可拖动
    });

    //鼠标移动更新窗口位置
    $(document).mousemove(function(e){
        var e = e || window.event;
        var x = e.pageX;      //移动时鼠标X坐标
        var y = e.pageY;      //移动时鼠标Y坐标
        if(isDraging){        //判断对话框能否拖动
            var moveX = dx + x - mx;      //移动后对话框新的left值
            var moveY = dy + y - my;      //移动后对话框新的top值
            //设置拖动范围
            var pageW = $(window).width();
            var pageH = $(window).height();
            var dialogW = $dialog.width();
            var dialogH = $dialog.height();
            var maxX = pageW - dialogW;       //X轴可拖动最大值
            var maxY = pageH - dialogH;       //Y轴可拖动最大值
            moveX = Math.min(Math.max(0,moveX),maxX);     //X轴可拖动范围
            moveY = Math.min(Math.max(0,moveY),maxY);     //Y轴可拖动范围
            //重新设置对话框的left、top
            $dialog.css({"left":moveX + 'px',"top":moveY + 'px'});
        };
    });

    //鼠标离开
    $(".title_Dialog").mouseup(function(){
        isDraging = false;
    });

    // //点击关闭对话框
    // $("#close").click(function(){
    //     $dialog.css("display","none");
    //     $mask.css("display","none");
    // });

    //窗口大小改变时，对话框始终居中
    window.onresize = function(){
        autoCenter($dialog,$dialog);
    };
}

