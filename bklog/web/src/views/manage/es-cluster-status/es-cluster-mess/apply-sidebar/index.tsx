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
import { Component, Prop, Ref } from 'vue-property-decorator';
import './index.scss';

@Component
export default class ApplySidebar extends tsc<{}> {
  @Prop({ type: Boolean, default: false }) isShow: boolean;
  @Ref('clusterTips') private readonly clusterTipsRef: HTMLElement;

  clusterInstance = null;

  beforeClose() {
    this.$emit('update:is-show', false);
  }

  handleShowClusterTips(e) {
    this.clusterInstance = this.$bkPopover(e.target, {
      content: this.clusterTipsRef,
      trigger: 'click',
      theme: 'light',
      interactive: true,
      placement: 'bottom-end'
    });
    this.clusterInstance && this.clusterInstance.show(100);
  }

  render() {
    return (
      <bk-sideslider
        is-show={this.isShow}
        title={this.$t('申请集群')}
        width={640}
        quick-close
        transfer
        before-close={this.beforeClose}
      >
        <div slot='content'>
          <div v-show={false}>
            <div
              ref='clusterTips'
              class='cluster-tips'
            >
              <span class='cluster-title'>{this.$t('容量评估方案如下')} :</span>
              <div class='plan-box'>
                <span>{this.$t('方案一')} :</span>
                <span>{this.$t('ES存储空间=原始数据 (1 + 副本数量) 1.5')}</span>
                <span>{this.$t('ES存储空间=单机原始日增量 主机数量 日志存储周期 1.5 2(副本数)')}</span>
              </div>
              <div class='plan-box'>
                <span>{this.$t('方案二')} :</span>
                <span>{this.$t('根据日志轮转文件大小，结合轮转时间，计算索引集日志大小')}</span>
                <span>{this.$t('计算方式：轮转文件大小*轮转日志份数，多个路径需分别计算后叠加')}</span>
              </div>
            </div>
          </div>
          <div class='apply-sidebar'>
            <bk-form
              ext-cls='apply-form'
              label-width={200}
              form-type='vertical'
            >
              <bk-alert
                type='info'
                title={this.$t('仅支持 IEG 集群申请，非 IEG 集群可按照 BG 要求自行申请')}
                closable
              ></bk-alert>
              <span class='cluster-tips-btn'>
                <span onClick={this.handleShowClusterTips}>{this.$t('预估规则')}</span>
              </span>
              <div class='form-inline-box'>
                <bk-form-item
                  label={this.$t('集群容量')}
                  required
                >
                  <div class='form-edit-box'>
                    <bk-input></bk-input>
                    <div class='edit-unit'>GB</div>
                  </div>
                </bk-form-item>
              </div>
              <div class='form-inline-box'>
                <bk-form-item
                  label={this.$t('日志峰值')}
                  required
                >
                  <div class='form-edit-box'>
                    <bk-input></bk-input>
                    <div class='edit-unit'>MB</div>
                  </div>
                </bk-form-item>
              </div>
              <div class='form-inline-box'>
                <bk-form-item
                  label={this.$t('日志保存天数')}
                  required
                >
                  <div class='form-edit-box'>
                    <bk-select></bk-select>
                    <div class='edit-unit'>{this.$t('天')}</div>
                  </div>
                </bk-form-item>
              </div>
              <div class='form-inline-box'>
                <bk-form-item
                  label={this.$t('冷热数据')}
                  required
                >
                  <bk-switcher
                    size='large'
                    theme='primary'
                  ></bk-switcher>
                </bk-form-item>
                <div class='hot-cold-data-tips'>
                  <i class='bk-icon icon-info'></i>
                  <span>
                    {this.$t(
                      '冷热数据能够降低 30% 左右的存储成本，但会导致检索速度下降，若您的日志量级较大，建议开启该配置'
                    )}
                  </span>
                </div>
              </div>
              <div class='form-inline-box'>
                <bk-form-item
                  label={this.$t('数据降冷天数')}
                  required
                >
                  <div class='form-edit-box'>
                    <bk-select></bk-select>
                    <div class='edit-unit'>{this.$t('天')}</div>
                  </div>
                </bk-form-item>
              </div>
              <div
                class='form-inline-box'
                style='margin-top: 32px'
              >
                <div class='submit-box'>
                  <bk-button theme='primary'>{this.$t('提交')}</bk-button>
                  <bk-button>{this.$t('取消')}</bk-button>
                </div>
              </div>
            </bk-form>
          </div>
        </div>
      </bk-sideslider>
    );
  }
}
