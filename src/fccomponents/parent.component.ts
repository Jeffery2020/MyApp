import { OnInit } from '@angular/core';

/*
 * @Author: Jeffery
 * @LastEditors: Jeffery
 * @Description: 父级基类
 * @email: 286630433@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 16:41:47
 */
export abstract class ParentComponent {
    // 主表对象
    mainObj: any;
    // 查询对象
    searchObj: any;
    // 列表数据
    pageList: any[]=[];
    constructor() {
    }
    abstract event(eventName: string, context?: any): void;
}
