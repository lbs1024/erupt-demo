package com.erupt.model;

import org.hibernate.annotations.GenericGenerator;
import xyz.erupt.annotation.Erupt;
import xyz.erupt.annotation.EruptField;
import xyz.erupt.annotation.sub_field.Edit;
import xyz.erupt.annotation.sub_field.View;

import javax.persistence.*;
import java.util.Date;

/**
* @Author LBS59
* @Description 使用java实体类创建后台管理页面
* @Date 16:47 2022/5/30
**/
@Erupt(name = "simple example")
@Table(name = "demo_simple")
@Entity
public class Simple {
    /**
     * 主键
     */
    @Id
    @GeneratedValue(generator = "generator")
    @GenericGenerator(name = "generator", strategy = "native")
    @Column(name = "id")
    @EruptField
    private Long id;

    /**
     * 文本输入
     */
    @EruptField(
            views = @View(title = "text"),
            edit = @Edit(title = "text")
    )
    private String input;

    /**
     * 数值输入
     */
    @EruptField(
            views = @View(title = "digit"),
            edit = @Edit(title = "digit")
    )
    private Integer number;

    /**
     * 布尔选择
     */
    @EruptField(
            views = @View(title = "bool"),
            edit = @Edit(title = "bool")
    )
    private Boolean bool;

    /**
     * 事件选择
     */
    @EruptField(
            views = @View(title = "date"),
            edit = @Edit(title = "date")
    )
    private Date date;
}
