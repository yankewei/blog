import Link from 'next/link';

export default function CountdownSupportPage() {
  return (
    <main className="flex flex-1 flex-col max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link 
          href="/support"
          className="text-fd-muted-foreground hover:text-fd-foreground transition-colors flex items-center gap-2"
        >
          ← Back to Support Center
        </Link>
      </div>

      <div className="text-center mb-8">
        <div className="mb-4">
          <img src="/image/lunar-loop-logo.png" alt="倒数日-支持农历 logo" className="w-20 h-20 mx-auto object-contain" />
        </div>
        <h1 className="text-3xl font-bold mb-4">倒数日-支持农历 - 支持</h1>
        <p className="text-fd-muted-foreground text-lg">
          获取倒数日应用的帮助和支持
        </p>
      </div>

      <div className="space-y-8">
        {/* App Description */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">关于倒数日-支持农历</h2>
          <p className="text-fd-muted-foreground mb-4">
            这是一款帮助您记录重要日期和事件的倒数日应用，支持农历和阳历。
          </p>
          <div>
            <h3 className="font-semibold mb-2">主要功能：</h3>
            <ul className="text-fd-muted-foreground space-y-2 list-disc list-inside">
              <li>创建和管理多个倒数日计时器</li>
              <li>支持阳历和农历两种日历系统</li>
              <li>记录生日、纪念日、节日等重要事件</li>
              <li>简洁直观的用户界面</li>
              <li>所有数据本地存储，保护隐私安全</li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">常见问题</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">如何创建新的倒数日？</h3>
              <p className="text-fd-muted-foreground">
                点击主屏幕的"+"按钮，然后选择目标日期并为您的倒数日添加标题。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">我可以使用农历日期吗？</h3>
              <p className="text-fd-muted-foreground">
                是的！应用支持阳历和农历两种日历系统。创建倒数日时可以在两者之间切换。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">如何编辑或删除倒数日？</h3>
              <p className="text-fd-muted-foreground">
                长按任意倒数日即可访问编辑和删除选项。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">我的数据会备份吗？</h3>
              <p className="text-fd-muted-foreground">
                目前应用的所有数据都存储在您的设备本地，暂不支持云端备份和跨设备同步。这确保了您的数据完全在您的控制之下，保护您的隐私安全。
              </p>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="bg-fd-muted/30 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-4">需要更多帮助？</h2>
          <p className="text-fd-muted-foreground mb-4">
            如果您需要额外支持或有关于倒数日-支持农历应用的具体问题，请联系我们。
          </p>
          <div className="space-y-2">
            <p className="text-fd-muted-foreground">Email:</p>
            <a 
              href="mailto:yankewei1993@gmail.com?subject=倒数日-支持农历 App Support" 
              className="text-fd-foreground font-semibold text-lg hover:underline"
            >
              yankewei1993@gmail.com
            </a>
          </div>
        </section>

        {/* Privacy Link */}
        <section className="text-center">
          <Link
            href="/privacy/countdown"
            className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
          >
            查看隐私政策 →
          </Link>
        </section>
      </div>
    </main>
  );
} 