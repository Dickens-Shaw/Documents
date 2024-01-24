import{_ as s,o as a,c as o,Q as l}from"./chunks/framework.058c99df.js";const e="/images/mvc.png",n="/images/mvvm.png",m=JSON.parse('{"title":"框架","description":"","frontmatter":{},"headers":[],"relativePath":"frame/common.md"}'),t={name:"frame/common.md"},p=l('<h1 id="框架" tabindex="-1">框架 <a class="header-anchor" href="#框架" aria-label="Permalink to &quot;框架&quot;">​</a></h1><h2 id="一、mvc、mvvm" tabindex="-1">一、MVC、MVVM <a class="header-anchor" href="#一、mvc、mvvm" aria-label="Permalink to &quot;一、MVC、MVVM&quot;">​</a></h2><p>常见的软件架构设计模式，主要通过分离关注点的方式来组织代码结构，优化开发效率。</p><p>View 和 Model：</p><ul><li>View 很简单，就是用户看到的视图</li><li>Model 同样很简单，一般就是本地数据和数据库中的数据</li></ul><h3 id="_1-mvc" tabindex="-1">1. MVC <a class="header-anchor" href="#_1-mvc" aria-label="Permalink to &quot;1. MVC&quot;">​</a></h3><p>MVC 通过分离 Model、View 和 Controller 的方式来组织代码结构。</p><p>其中 View 负责页面的显示逻辑，Model 负责存储页面的业务数据，以及对相应数据的操作。并且 View 和 Model 应用了观察者模式，当 Model 层发生改变的时候它会通知有关 View 层更新页面。</p><p>Controller 层是 View 层和 Model 层的纽带，它主要负责用户与应用的响应操作，当用户与页面产生交互的时候，Controller 中的事件触发器就开始工作了，通过调用 Model 层，来完成对 Model 的修改，然后 Model 层再去通知 View 层更新。</p><p>但是 MVC 有一个巨大的缺陷就是控制器承担的责任太大了，随着项目愈加复杂，控制器中的代码会越来越臃肿，导致出现不利于维护的情况。</p><p><img src="'+e+'" alt="/images/"></p><h3 id="_2-mvvm" tabindex="-1">2. MVVM <a class="header-anchor" href="#_2-mvvm" aria-label="Permalink to &quot;2. MVVM&quot;">​</a></h3><p>引入了 ViewModel 的概念。ViewModel 只关心数据和业务的处理，不关心 View 如何处理数据，在这种情况下，View 和 Model 都可以独立出来，任何一方改变了也不一定需要改变另一方，并且可以将一些可复用的逻辑放在一个 ViewModel 中，让多个 View 复用这个 ViewModel。</p><p>以 Vue 框架来举例：</p><ul><li>ViewModel 就是组件的实例。View 就是模板，Model 的话在引入 Vuex 的情况下是完全可以和组件分离的。</li><li>除了以上三个部分，其实在 MVVM 中还引入了一个隐式的 Binder 层，实现了 View 和 ViewModel 的绑定。</li><li>这个隐式的 Binder 层就是 Vue 通过解析模板中的插值和指令从而实现 View 与 ViewModel 的绑定。</li></ul><p>对于 MVVM 来说，其实最重要的并不是通过双向绑定或者其他的方式将 View 与 ViewModel 绑定起来，而是 <code>通过 ViewModel 将视图中的状态和用户的行为分离出一个抽象</code>，这才是 MVVM 的精髓</p><p><img src="'+n+`" alt="/images/"></p><h2 id="二、虚拟-dom" tabindex="-1">二、虚拟 DOM <a class="header-anchor" href="#二、虚拟-dom" aria-label="Permalink to &quot;二、虚拟 DOM&quot;">​</a></h2><h3 id="_1-理解" tabindex="-1">1. 理解 <a class="header-anchor" href="#_1-理解" aria-label="Permalink to &quot;1. 理解&quot;">​</a></h3><p>从本质上来说，Virtual Dom 是一个 JavaScript 对象，通过对象的方式来表示 DOM 结构。将页面的状态抽象为 JS 对象的形式，配合不同的渲染工具，使跨平台渲染成为可能。通过事务处理机制，将多次 DOM 修改的结果一次性的更新到页面上，从而有效的减少页面渲染的次数，减少修改 DOM 的重绘重排次数，提高渲染性能。</p><p>虚拟 DOM 是对 DOM 的抽象，这个对象是更加轻量级的对 DOM 的描述。它设计的最初目的，就是更好的跨平台，比如 Node.js 就没有 DOM，如果想实现 SSR，那么一个方式就是借助虚拟 DOM，因为虚拟 DOM 本身是 js 对象。 在代码渲染到页面之前，vue 会把代码转换成一个对象（虚拟 DOM）。以对象的形式来描述真实 DOM 结构，最终渲染到页面。在每次数据发生变化前，虚拟 DOM 都会缓存一份，变化之时，现在的虚拟 DOM 会与缓存的虚拟 DOM 进行比较。在 vue 内部封装了 diff 算法，通过这个算法来进行比较，渲染时修改改变的变化，原先没有发生改变的通过原先的数据进行渲染。</p><p>另外现代前端框架的一个基本要求就是无须手动操作 DOM，一方面是因为手动操作 DOM 无法保证程序性能，多人协作的项目中如果 review 不严格，可能会有开发者写出性能较低的代码，另一方面更重要的是省略手动 DOM 操作可以大大提高开发效率。</p><h3 id="_2-解析过程" tabindex="-1">2. 解析过程 <a class="header-anchor" href="#_2-解析过程" aria-label="Permalink to &quot;2. 解析过程&quot;">​</a></h3><ul><li><p>首先对将要插入到文档中的 DOM 树结构进行分析，使用 js 对象将其表示出来，比如一个元素对象，包含 TagName、props 和 Children 这些属性。然后将这个 js 对象树给保存下来，最后再将 DOM 片段插入到文档中。</p></li><li><p>当页面的状态发生改变，需要对页面的 DOM 的结构进行调整的时候，首先根据变更的状态，重新构建起一棵对象树，然后将这棵新的对象树和旧的对象树进行比较，记录下两棵树的的差异。</p></li><li><p>最后将记录的有差异的地方应用到真正的 DOM 树中去，这样视图就更新了</p></li></ul><h3 id="_3-优势" tabindex="-1">3. 优势 <a class="header-anchor" href="#_3-优势" aria-label="Permalink to &quot;3. 优势&quot;">​</a></h3><ol><li><strong>保证性能下限</strong>: 虚拟 DOM 可以经过 diff 找出最小差异,然后批量进行 patch,这种操作虽然比不上手动优化,但是比起粗暴的 DOM 操作性能要好很多,因此虚拟 DOM 可以保证性能下限</li><li><strong>无需手动操作 DOM</strong>: 虚拟 DOM 的 diff 和 patch 都是在一次更新中自动进行的,我们无需手动操作 DOM,极大提高开发效率</li><li><strong>跨平台</strong>: 虚拟 DOM 本质上是 JavaScript 对象,而 DOM 与平台强相关,相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、移动端开发等等</li><li>实现组件的高度抽象化</li></ol><h2 id="三、-前端路由" tabindex="-1">三、 前端路由 <a class="header-anchor" href="#三、-前端路由" aria-label="Permalink to &quot;三、 前端路由&quot;">​</a></h2><p>本质就是监听 URL 的变化，然后匹配路由规则，显示相应的页面，并且无须刷新</p><h3 id="_1-hash-模式" tabindex="-1">1. hash 模式 <a class="header-anchor" href="#_1-hash-模式" aria-label="Permalink to &quot;1. hash 模式&quot;">​</a></h3><p><strong>简介：</strong> hash 模式是开发中默认的模式，它的 URL 带着一个#，例如：<code>http://www.abc.com/#/home</code>，它的 hash 值就是<code>#/home</code>。</p><p><strong>特点：</strong> hash 值会出现在 URL 里面，但是不会出现在 HTTP 请求中，对后端完全没有影响。所以改变 hash 值，不会重新加载页面。这种模式的浏览器支持度很好，低版本的 IE 浏览器也支持这种模式。hash 路由被称为是前端路由，已经成为 SPA（单页面应用）的标配。</p><p><strong>原理：</strong> hash 模式的主要原理就是 <strong><code>onhashchange()</code></strong> 事件：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onhashchange</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">event</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">event</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">oldURL</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">event</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">newURL</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">hash</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">location</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">hash</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>使用<code>onhashchange()</code>事件的好处就是，在页面的 hash 值发生变化时，无需向后端发起请求，window 就可以监听事件的改变，并按规则加载相应的代码。除此之外，hash 值变化对应的 URL 都会被浏览器记录下来，这样浏览器就能实现页面的前进和后退。虽然是没有请求后端服务器，但是页面的 hash 值和对应的 URL 关联起来了</p><h3 id="_2-history-模式" tabindex="-1">2. history 模式 <a class="header-anchor" href="#_2-history-模式" aria-label="Permalink to &quot;2. history 模式&quot;">​</a></h3><p><strong>简介：</strong> history 模式的 URL 中没有#，它使用的是传统的路由分发模式，即用户在输入一个 URL 时，服务器会接收这个请求，并解析这个 URL，然后做出相应的逻辑处理。</p><p><strong>特点：</strong> 当使用 history 模式时，URL 就像这样：<code>http://abc.com/user/id</code>。相比 hash 模式更加好看。但是，history 模式需要后台配置支持。如果后台没有正确配置，访问时会返回 404。</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># nginx配置</span></span>
<span class="line"><span style="color:#C792EA;">server</span><span style="color:#BABED8;"> {</span></span>
<span class="line"><span style="color:#BABED8;">  ...</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">location</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#BABED8;">{</span></span>
<span class="line"><span style="color:#BABED8;">   </span><span style="color:#89DDFF;"> try_files $</span><span style="color:#BABED8;">uri </span><span style="color:#89DDFF;">$</span><span style="color:#BABED8;">uri/ /index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  }</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>API：</strong> history api 可以分为两大部分，切换历史状态和修改历史状态：</p><ul><li><strong>修改历史状态：</strong> 包括了 HTML5 History Interface 中新增的 <code>pushState()</code> 和 <code>replaceState()</code> 方法，这两个方法应用于浏览器的历史记录栈，提供了对历史记录进行修改的功能。只是当他们进行修改时，虽然修改了 url，但浏览器不会立即向后端发送请求。如果要做到改变 url 但又不刷新页面的效果，就需要前端用上这两个 API。</li><li><strong>切换历史状态：</strong> 包括<code>forward()、back()、go()</code>三个方法，对应浏览器的前进，后退，跳转操作。 虽然 history 模式丢弃了丑陋的#。但是，它也有自己的缺点，就是在刷新页面的时候，如果没有相应的路由或资源，就会刷出 404 来。</li></ul><h3 id="_3-对比" tabindex="-1">3. 对比 <a class="header-anchor" href="#_3-对比" aria-label="Permalink to &quot;3. 对比&quot;">​</a></h3><p>调用 <code>history.pushState()</code> 相比于直接修改 <code>hash</code>，存在以下优势:</p><ul><li>pushState() 设置的新 URL 可以是与当前 URL 同源的任意 URL；而 hash 只可修改 # 后面的部分，因此只能设置与当前 URL 同文档的 URL；</li><li>pushState() 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中；而 hash 设置的新值必须与原来不一样才会触发动作将记录添加到栈中；</li><li>pushState() 通过 stateObject 参数可以添加任意类型的数据到记录中；而 hash 只可添加短字符串；</li><li>pushState() 可额外设置 title 属性供后续使用。</li><li>hash 模式下，仅 hash 符号之前的 url 会被包含在请求中，后端如果没有做到对路由的全覆盖，也不会返回 404 错误；history 模式下，前端的 url 必须和实际向后端发起请求的 url 一致，如果没有对用的路由处理，将返回 404 错误。</li></ul>`,43),r=[p];function i(c,h,d,D,y,M){return a(),o("div",null,r)}const F=s(t,[["render",i]]);export{m as __pageData,F as default};
