<script setup>
  import { computed } from 'vue';

  import TimeRange from '@/components/time-range/time-range';
  import { handleTransformToTimestamp } from '@/components/time-range/utils';
  import useStore from '@/hooks/use-store';
  import { updateTimezone } from '@/language/dayjs';

  const store = useStore();

  /** 时间选择器绑定的值 */
  const timeRangValue = computed(() => {
    return store.state.indexItem.datePickerValue;
  });

  const timezone = computed(() => {
    const { timezone = '' } = store.state.indexItem;
    return timezone;
  });

  const handleTimezoneChange = timezone => {
    store.commit('updateIndexItemParams', { timezone });
    updateTimezone(timezone);
    store.dispatch('requestIndexSetQuery');
  };

  // 日期变化
  const handleTimeRangeChange = async val => {
    store.commit('updateIsSetDefaultTableColumn', false);
    const result = handleTransformToTimestamp(val);
    store.commit('updateIndexItemParams', { start_time: result[0], end_time: result[1], datePickerValue: val });
    await store.dispatch('requestIndexSetFieldInfo');
    store.dispatch('requestIndexSetQuery');
  };

  /** 刷新 */
  const handleRefresh = () => {
    store.dispatch('requestIndexSetQuery');
  };
</script>
<template>
  <span class="query-params-wrap">
    <TimeRange
      :timezone="timezone"
      :value="timeRangValue"
      @change="handleTimeRangeChange"
      @timezone-change="handleTimezoneChange"
    ></TimeRange>
    <!-- 自动刷新 -->
    <!-- <bk-popover
      ref="autoRefreshPopper"
      :distance="15"
      :offset="0"
      :on-hide="handleDropdownHide"
      :on-show="handleDropdownShow"
      animation="slide-toggle"
      placement="bottom-start"
      theme="light bk-select-dropdown"
      trigger="click"
    >
      <slot name="trigger">
        <div class="auto-refresh-trigger">
          <span
            :class="['bklog-icon', isAutoRefresh ? 'bklog-auto-refresh' : 'bklog-no-refresh']"
            data-test-id="retrieve_span_periodicRefresh"
            @click.stop="handleRefreshDebounce"
          ></span>
          <span :class="isAutoRefresh && 'active-text'">{{ refreshTimeText }}</span>
          <span
            class="bk-icon icon-angle-down"
            :class="refreshActive && 'active'"
          ></span>
        </div>
      </slot>
      <template #content>
        <div class="bk-select-dropdown-content auto-refresh-content">
          <div class="bk-options-wrapper">
            <ul class="bk-options bk-options-single">
              <li
                v-for="item in refreshTimeList"
                :class="['bk-option', refreshTimeout === item.id && 'is-selected']"
                :key="item.id"
                @click="handleSelectRefreshTimeout(item.id)"
              >
                <div class="bk-option-content">{{ item.name }}</div>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </bk-popover> -->
    <!-- 手动刷新 -->
    <!-- <span
      class="search-refresh"
      v-bk-tooltips="{ content: $t('刷新') }"
      @click="handleRefresh"
    >
      <i class="bklog-icon bklog-log-refresh"></i>
    </span> -->
  </span>
</template>
