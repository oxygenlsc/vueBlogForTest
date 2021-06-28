<template>
  <div class="blog-detail-main-container">
    <mavon-editor
      class="mad-show"
      v-model="value"
      :editable="false"
      :toolbarsFlag="false"
      :subfield="false"
      defaultOpen="preview"
      ishljs
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: `# JS语言简史 ~~

1. JS语言的起源

网景（Netscape Communication Corperation）,1994年，推出第一款商用浏览器，网景浏览器（Netscape Navigator） 1995年，网景公司决定在浏览器中加入一门语言，可以作交互效果，提高用户体验。
最终决定独立开发一门语言，聘请Brendan Eich, 10天后，新的语言诞生

LiveScript -> JavaScript(JS)


**JS语言之父： Brendan Eich**

2. 第一次浏览器大战

网景公司打算在浏览器中加入网络操作系统，影响到了微软的利益，引起了微软的注意

1995年，微软发布IE浏览器

JS语言推出后网景获得极大的竞争优势。

微软对js语言反编译,借鉴JS语言,推出了JScript,VBScript

第一次浏览器大战是标准之争

1997, 网景公司将javascript1.1版本提交给ECMA（欧洲计算机制造协会）

IE3发布，并绑定windows操作系统

1998年,网景公司，被收购

**ECMA收录了javascript,并提交给了ISO，经过修改,成为了第一个js版本，成为ECMAScript,简称ES**

3. 第二次浏览器大战

微软 之后推出 IE4 IE5 IE6(windows XP)

微软决定解散浏览器团队

Brendan Eich, 在网景解散后 带领团队成立Mozilla基金会，并决定，将网景浏览器开源。

长时间内，世界的技术爱好者，对网景浏览器，进行维护和打补丁

2002年，Mozilla推出firefox浏览器。

2008，谷歌推出chrome浏览器， 苹果推出sarfari， ASA公司推出opera

chrome浏览器搭载JS执行引擎V8 （V8引擎，可以将js代码直接转换为字节码，理论上JS代码的执行速度已经接近汇编语言）于是，js具备了编写大型应用程序的能力，甚至服务器应用

**V8引擎将JS的执行推向了一个新的台阶**

4. ES标准的发展 

ES1 1997年

ES2 1998年

ES3 1999年

ES4 没有发布

ES5  2009年推出 也是我们要学习的  不在区分javascript 和 ECMAScript

ES6  2015年

ES7  2016年
`,
    };
  },
};
</script>

<style lang='less'>
.blog-detail-main-container {
  .v-note-wrapper .v-note-panel .v-note-show .v-show-content,
  .v-note-wrapper .v-note-panel .v-note-show .v-show-content-html {
    background-image: linear-gradient(
        90deg,
        rgba(50, 0, 0, 0.1) 3%,
        transparent 0
      ),
      linear-gradient(1turn, rgba(50, 0, 0, 0.1) 3%, transparent 0);
    background-size: 20px 20px;
    background-position: 50%;
  }
}
</style>