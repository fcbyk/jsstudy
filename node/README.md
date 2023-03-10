> Node.js 中模块可以理解为一个js文件

#### Node.js 中模块的分类

Node.js 中根据模块来源的不同，将模块分为了 3 大类，分别是：

- 内置模块（内置模块是由 Node.js 官方提供的，例如 fs、path、http 等）
- 自定义模块（用户创建的每个 .js 文件，都是自定义模块）
- 第三方模块（由第三方开发出来的模块，并非官方提供的内置模块，也不是用户创建的自定义模块，使用前需要先下载）

#### 第三方模块

> Node.js 中的第三方模块又叫做包

可以从 https://www.npmjs.com/ 网站上搜索自己所需要的包，它是全球最大的包共享平台

这个网站所有的包都在一个地址为 https://registry.npmjs.org/ 的服务器上

#### npm

> npm为包管理工具，全称Node Package Manager
> 包管理工具会随着 Node.js 的安装包一起被安装到了用户的电脑上

我们可以使用这个包管理工具，从 https://registry.npmjs.org/ 服务器把需要的包下载到本地使用

使用 npm 包管理工具下载的包，共分为两大类，分别是：

- 项目包

  - 那些被安装到项目的 node_modules 目录中的包，都是项目包。

  - 项目包又分为两类，分别是：

    - 开发依赖包（被记录到 devDependencies节点中的包，只在开发期间会用到），在执行 `npm install` 命令时，需要提供 `-D`  参数

    - 核心依赖包（被记录到 dependencies节点中的包，在开发期间和项目上线之后都会用到）

- 全局包
  - 在执行 `npm install` 命令时，如果提供了 `-g`  参数，则会把包安装为全局包
  - 全局包会被安装到 C:\Users\用户目录\AppData\Roaming\npm\node_modules 目录下
  - 只有工具性质的包，才有全局安装的必要性。因为它们提供了好用的终端命令

#### 文件说明

> 初次装包完成后，在项目文件夹会多出一些文件目录
> package.json 包管理配置文件 可以通过 `npm init -y` 命令快速创建

**node_modules 文件夹** 用来存放所有已安装到项目中的包。require() 导入第三方包时，就是从这个目录中查找并加载包，这个文件夹过大，需要添加到 .gitignore忽略文件中

**package-lock.json配置文件** 用来记录 node_modules 目录下的每一个包的下载信息，例如包的名字、版本号、下载地址等

> 尽可能不要手动修改 node_modules 或 package-lock.json文件中的任何代码，npm 包管理工具会自动维护它们

**package.json 包管理配置文件** 用来记录与项目有关的一些配置信息。例如：项目的名称、版本号、描述等，项目中都用到了哪些包，哪些包只在开发期间会用到，那些包在开发和部署时都需要用到。运行 npm install 命令安装包的时候，npm包管理工具会自动把包的名称和版本号，记录到 package.json中。方便剔除 node_modules目录之后，在团队成员之间共享项目的源代码

