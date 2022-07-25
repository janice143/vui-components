<template>
  <div>
    <h1>Chatbox 聊天盒</h1>
    <p>展示对话双方的各种聊天信息</p>
    <showcomponent
      title="基础用法"
      subtitle="简单的聊天盒展示，宽度默认为父元素宽度"
      :codes="code1"
    >
      <template v-slot:showarea>
        <div style="width: 100%">
          <vui-chatbox :text="['Hello, John']"></vui-chatbox>
          <vui-chatbox sent :text="['Hello']"></vui-chatbox>
          <vui-chatbox :text="['Hello, How are you?']"></vui-chatbox>
        </div>
      </template>
    </showcomponent>

    <showcomponent
      title="头像用法"
      subtitle="可以添加头像的链接或引用"
      :codes="code2"
    >
      <template v-slot:showarea>
        <div>
          <vui-chatbox
            :text="['Hello, John']"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></vui-chatbox>
          <vui-chatbox
            sent
            :text="['Hello']"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></vui-chatbox>
          <vui-chatbox
            :text="['Hello, How are you?']"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></vui-chatbox>
        </div>
      </template>
    </showcomponent>

    <showcomponent
      title="昵称用法"
      subtitle="可以增加聊天双方的昵称"
      :codes="code3"
    >
      <template v-slot:showarea>
        <div>
          <vui-chatbox
            :text="['Hello, John']"
            name="Gypsophlia"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></vui-chatbox>
          <vui-chatbox
            sent
            :text="['Hello']"
            name="Gypsophlia"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></vui-chatbox>
          <vui-chatbox
            :text="['Hello, How are you?']"
            name="Gypsophlia"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></vui-chatbox>
        </div>
      </template>
    </showcomponent>

    <showcomponent
      title="时间戳用法"
      subtitle="每一条消息可以增加时间戳"
      :codes="code4"
    >
      <template v-slot:showarea>
        <div>
          <vui-chatbox
            :text="['Hello, John']"
            name="Gypsophlia"
            stamp="3 minutes ago"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></vui-chatbox>
          <vui-chatbox
            sent
            :text="['Hello']"
            name="Gypsophlia"
            stamp="4 minutes ago"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></vui-chatbox>
          <vui-chatbox
            :text="['Hello, How are you?']"
            name="Gypsophlia"
            stamp="4 minutes ago"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></vui-chatbox>
        </div>
      </template>
    </showcomponent>

    <showcomponent
      title="背景颜色用法"
      subtitle="添加背景颜色的16进制值/RGB值/颜色英文"
      :codes="code5"
    >
      <template v-slot:showarea>
        <div>
          <vui-chatbox
            :text="['Hello, John']"
            name="Gypsophlia"
            stamp="3 minutes ago"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
            bgColor="skyblue"
          ></vui-chatbox>
          <vui-chatbox
            sent
            :text="['Hello']"
            name="Gypsophlia"
            stamp="4 minutes ago"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
            bgColor="#ecb959"
          ></vui-chatbox>
          <vui-chatbox
            :text="['Hello, How are you?']"
            name="Gypsophlia"
            stamp="4 minutes ago"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
            bgColor="#3dbf6c"
          ></vui-chatbox>
        </div>
      </template>
    </showcomponent>

    <showcomponent
      title="连续消息"
      subtitle="短时间内发送连续几条信息"
      :codes="code6"
    >
      <template v-slot:showarea>
        <div>
          <vui-chatbox
            :text="['Hello, John']"
            name="Jim"
            stamp="3 minutes ago"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></vui-chatbox>
          <vui-chatbox
            sent
            :text="['Hi, Jim', 'How are you?']"
            name="John"
            stamp="4 minutes ago"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></vui-chatbox>
          <vui-chatbox
            :text="['I am fine.', 'What about you?']"
            name="Jim"
            stamp="4 minutes ago"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></vui-chatbox>
          <vui-chatbox
            sent
            :text="['I am OK, too.', 'Thanks!']"
            name="John"
            stamp="4 minutes ago"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          ></vui-chatbox>
        </div>
      </template>
    </showcomponent>

    <h1 style="margin-top: 50px">Attribution</h1>
    <showparameter :parameter="params"></showparameter>
  </div>
</template>

<script>
export default {
  name: "chatbox",
  chName: "聊天盒",
  data() {
    return {
      params: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          ["text", "聊天消息内容", "Array", "——", "——"],
          ["name", "聊天人昵称", "String", "——", "undefined"],
          ["avatar", "聊天人头像链接或引用", "String", "——", "undefined"],
          ["stamp", "聊天消息发送时间", "String", "——", "undefined"],
          ["sent", "是否为消息发送方", "Boolean", "true/false", "false"],
          [
            "bgColor",
            "聊条消息背景颜色",
            "String",
            "16进制/RGB/英文颜色",
            "undefined",
          ],
        ],
      },
      code1: `<vui-chatbox :text="['Hello, John']"></vui-chatbox>
<vui-chatbox sent :text="['Hello']"></vui-chatbox>
<vui-chatbox :text="['Hello, How are you?']"></vui-chatbox>`,
      code2: `<vui-chatbox
  :text="['Hello, John']"
  avatar="https://cdn.quasar.dev/img/avatar1.jpg"
></vui-chatbox>
<vui-chatbox
  sent
  :text="['Hello']"
  avatar="https://cdn.quasar.dev/img/avatar1.jpg"
></vui-chatbox>
<vui-chatbox
  :text="['Hello, How are you?']"
  avatar="https://cdn.quasar.dev/img/avatar1.jpg"
></vui-chatbox>`,
      code3: `<vui-chatbox
  :text="['Hello, John']"
  name="Gypsophlia"
  avatar="https://cdn.quasar.dev/img/avatar1.jpg"
></vui-chatbox>
<vui-chatbox
  sent
  :text="['Hello']"
  name="Gypsophlia"
  avatar="https://cdn.quasar.dev/img/avatar1.jpg"
></vui-chatbox>
<vui-chatbox
  :text="['Hello, How are you?']"
  name="Gypsophlia"
  avatar="https://cdn.quasar.dev/img/avatar1.jpg"
></vui-chatbox>
`,
      code4: `<vui-chatbox
  :text="['Hello, John']"
  name="Gypsophlia"
  stamp="3 minutes ago"
  avatar="https://cdn.quasar.dev/img/avatar1.jpg"
></vui-chatbox>
<vui-chatbox
  sent
  :text="['Hello']"
  name="Gypsophlia"
  stamp="4 minutes ago"
  avatar="https://cdn.quasar.dev/img/avatar1.jpg"
></vui-chatbox>
<vui-chatbox
  :text="['Hello, How are you?']"
  name="Gypsophlia"
  stamp="4 minutes ago"
  avatar="https://cdn.quasar.dev/img/avatar1.jpg"
></vui-chatbox>
`,
      code5: `<vui-chatbox
  :text="['Hello, John']"
  name="Gypsophlia"
  stamp="3 minutes ago"
  avatar="https://cdn.quasar.dev/img/avatar1.jpg"
  bgColor="skyblue"
></vui-chatbox>
<vui-chatbox
  sent
  :text="['Hello']"
  name="Gypsophlia"
  stamp="4 minutes ago"
  avatar="https://cdn.quasar.dev/img/avatar1.jpg"
  bgColor="#ecb959"
></vui-chatbox>
<vui-chatbox
  :text="['Hello, How are you?']"
  name="Gypsophlia"
  stamp="4 minutes ago"
  avatar="https://cdn.quasar.dev/img/avatar1.jpg"
  bgColor="#3dbf6c"
></vui-chatbox>
`,
      code6: `<vui-chatbox
  :text="['Hello, John']"
  name="Jim"
  stamp="3 minutes ago"
  avatar="https://cdn.quasar.dev/img/avatar1.jpg"
></vui-chatbox>
<vui-chatbox
  sent
  :text="['Hi, Jim', 'How are you?']"
  name="John"
  stamp="4 minutes ago"
  avatar="https://cdn.quasar.dev/img/avatar1.jpg"
></vui-chatbox>
<vui-chatbox
  :text="['I am fine.', 'What about you?']"
  name="Jim"
  stamp="4 minutes ago"
  avatar="https://cdn.quasar.dev/img/avatar1.jpg"
></vui-chatbox>
<vui-chatbox
  sent
  :text="['I am OK, too.', 'Thanks!']"
  name="John"
  stamp="4 minutes ago"
  avatar="https://cdn.quasar.dev/img/avatar1.jpg"
></vui-chatbox>
`,
    };
  },
};
</script>
