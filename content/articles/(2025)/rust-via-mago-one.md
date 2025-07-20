---
title: 基于 Mago 学习 Rust（一）
draft: true
---
# 什么是 Mago
[Mago](https://github.com/carthage-software/mago) 是一个基于 Rust 这门语言为 PHP 写的一套现代化工具链，支持代码格式化，静态检查。
# 为什么基于 Mago 学习 Rust
作者本人的主力语言是 PHP，所以从 Mago 入手应该会更加容易且形成好的 Rust 工程化，本人是基于 Mago 0.26.1 学习的，代码不能保证和未来的一样。
# 如何开始
Mago 提供了很多的 [Library](https://github.com/carthage-software/mago/tree/main/crates)，可以从这里看到，我们从一些简单的 Library 开始学习。从名字上看 php-version 应该是如何解析 PHP 版本号的一个 Library，先从它入手。
## 创建一个单独的项目
使用 Cargo 创建一个空项目`cargo new rust-study-one && cd rust-study-one`，然后添加依赖，`cargo add mago-php-version@0.26.1`，打开 Cargo.toml 可以看到类似于如下的内容，会根据版本不同有所差异
```toml
[package]
name = "rust-study-one"
version = "0.1.0"
edition = "2024"

[dependencies]
mago-php-version = "0.26.1"
```
根据文档我们写一个简单的使用 php-versin 的 demo，打开 src/main.rs 文件，改成以下内容：
```rust
use mago_php_version::PHPVersion;

fn main() {
    let version = PHPVersion::new(8, 4, 0);
    println!("Major version: {}", version.major());
    println!("Minor version: {}", version.minor());
    println!("Patch version: {}", version.patch());
    println!("Version ID: {}", version.to_version_id());
    println!("Version string: {}", version.to_string());
}
```
