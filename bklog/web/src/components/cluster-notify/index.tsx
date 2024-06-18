/*
 * Tencent is pleased to support the open source community by making BK-LOG 蓝鲸日志平台 available.
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 * BK-LOG 蓝鲸日志平台 is licensed under the MIT License.
 *
 * License for BK-LOG 蓝鲸日志平台:
 * --------------------------------------------------------------------
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 * LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
 * NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
 */

import { Component as tsc } from 'vue-tsx-support';
import { Component } from 'vue-property-decorator';
// import $http from '../../api';
import './index.scss';

@Component
export default class ClusterNotify extends tsc<{}> {
  // @Prop({ type: Object, required: true }) rowData: any;

  render() {
    return (
      <div class='notify-box'>
        <span>
          日志会按照写入量由时间远近删除，无法按照预期的保存时长保存，请及时申请 ES 集群。若您已完成申请，请切换集群 。
        </span>
        <div class='btn-box'>
          <div>
            <bk-button
              text
              title='primary'
            >
              切换集群
            </bk-button>
            <bk-button
              text
              title='primary'
            >
              申请集群
            </bk-button>
          </div>
        </div>
      </div>
    );
  }
}
