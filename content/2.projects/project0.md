---
title: '高雄市民服務平台｜便民一路通'
---

# 高雄市民服務平台｜便民一路通

## 簡介：

- 類型：**高雄市政府服務入口網站 （舊專案維護）**
- 前端共三人使用 `Git Flow` 協作
- 主要需求是根據新的設計稿更新網站樣式
- 與後端團隊溝通 API 格式的更新需求
- 增加新功能，並對新增服務客製化調整
- 進行原有 Bug 的修復

![cover](/images/projects/cover/kgo-cover.png)

## 負責項目

#### 更新網站樣式（含 RWD）

- 根據設計公司提供 HTML / CSS 檔案進行套版
- 將設計公司所使用的 jquery base 套件，例如：`Slick`, `Select2`，引入`Nuxt`中使用

![demo1](/images/projects/kgo/kgo1.png)
![demo2](/images/projects/kgo/kgo2.png)

#### 動態表單呈現

- 根據串接 API 回傳的服務表單（在後台創建）
- 使用`<component :is="..."`動態渲染表單元件（例如：`Select`,`Radio`,`Text Input`等）
- 使用`.sync`來同步父子元件的資料
  ![demo3](/images/projects/kgo/kgo3.png)

#### 行事曆預約相關

- 使用 FullCalendar，根據 API 回傳資料，顯示可預約時段
- 根據時間判斷是否可預約，顯示對應提示文字和顏色
  ![demo4](/images/projects/kgo/kgo4.png)
  ![demo5](/images/projects/kgo/kgo5.png)

#### 加入 Schema.org 結構化資料

- 使用 Nuxt 的 SSR 模式，加入 JSON-LD 結構化資料，提升 SEO
  ![demo6](/images/projects/kgo/kgo6.png)
  ![demo7](/images/projects/kgo/kgo7.png)

## 專案管理

- 使用`Github Issues`，來管理任務和開新的 Branch
- 使用 `Notion`管理並彙整問題提供給 PM ，以便回報對接廠商
- 因此專案沒有資深前端工程師參與，由團隊成員互相`Code Review`確保程式碼品質
  ![demo8](/images/projects/kgo/kgo8.png)
  ![demo9](/images/projects/kgo/kgo9.png)

## 使用技術

- Nuxt2
- Vue2
- Vuex
- vee-validate
- Bootstrap5
- jquery
- FullCalendar
- select2

## 備註：

- 目前預計 2024 年 1 月正式站才會改版上線，暫時無法展示新版網站
