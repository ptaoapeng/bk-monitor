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
import './index.scss';

@Component
export default class ApplyTips extends tsc<{}> {
  // @Prop({ type: String, required: true }) operateType: string;
  render() {
    return (
      <div class='tips-box'>
        <div class='tips-left'>
          <i v-bkloading={{ isLoading: true, opacity: 1, zIndex: 10, theme: 'primary', mode: 'spin', size: 'mini' }} />
          <i18n
            style='margin-left: 16px'
            path='集群申请中，当前处于 {0} 节点，可跳转至 {1} 查看'
          >
            <bk-tag style='font-size: 14px'>{this.$t('领导审批')}</bk-tag>
            <bk-button text>
              <span>{this.$t('单据详情')}</span>
              <i class='log-icon icon-jump'></i>
            </bk-button>
          </i18n>
        </div>
        <div class='tips-right'>
          <bk-button
            text
            class='edit'
          >
            <i class='bk-icon icon-edit-line'></i>
            <span>{this.$t('编辑')}</span>
          </bk-button>
          <bk-button
            text
            class='chat-group'
          >
            <i class='bk-icon icon-weixin-pro'></i>
            <span>{this.$t('一键拉群')}</span>
          </bk-button>
        </div>
      </div>
    );
  }
}
