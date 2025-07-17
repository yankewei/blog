import Link from 'next/link';

export default function CountdownPrivacyPage() {
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
        <h1 className="text-3xl font-bold mb-4">倒数日-支持农历 - 隐私政策</h1>
        <p className="text-fd-muted-foreground text-lg">
          我们如何保护您的隐私和处理您的数据
        </p>
      </div>

      <div className="space-y-8">
        {/* Introduction */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">隐私政策</h2>
          <p className="text-fd-muted-foreground mb-4">
            最后更新：{`${new Date().getFullYear()} 年 ${new Date().getMonth() + 1} 月 ${new Date().getDate()} 日`}
          </p>
          <p className="text-fd-muted-foreground">
            本隐私政策描述了倒数日-支持农历应用（"我们"）在您使用我们的倒数日应用时如何收集、使用和保护您的信息。
          </p>
        </section>

        {/* Information We Collect */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">我们收集的信息</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">本地数据</h3>
              <p className="text-fd-muted-foreground">
                应用在您的设备本地存储以下信息，这些数据不会传输到任何服务器：
              </p>
              <ul className="text-fd-muted-foreground space-y-1 list-disc list-inside mt-2">
                <li>倒数日标题和描述</li>
                <li>目标日期和时间</li>
                <li>日历偏好设置（阳历或农历）</li>
                <li>应用设置和偏好</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">无数据收集</h3>
              <p className="text-fd-muted-foreground">
                由于应用完全离线运行，我们不会收集任何设备信息、使用统计或崩溃报告。您的所有数据都安全地存储在您的设备上。
              </p>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">我们如何使用您的信息</h2>
          <p className="text-fd-muted-foreground mb-4">
            由于所有数据都存储在您的设备本地，我们实际上不会收集或处理您的个人信息。您的数据完全在您的控制之下：
          </p>
          <ul className="text-fd-muted-foreground space-y-2 list-disc list-inside">
            <li>所有倒数日数据都存储在您的设备上</li>
            <li>无需网络连接即可使用所有功能</li>
            <li>您的数据不会传输到任何服务器</li>
            <li>完全保护您的隐私安全</li>
          </ul>
        </section>

        {/* Data Storage and Security */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">数据存储和安全</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">本地存储</h3>
              <p className="text-fd-muted-foreground">
                您的所有倒数日数据都存储在您的设备本地，无需网络连接即可使用。这确保您的个人信息始终在您的控制之下，完全保护您的隐私。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">无云端存储</h3>
              <p className="text-fd-muted-foreground">
                目前应用暂不支持云端备份和跨设备同步功能。所有数据都保存在您的设备上，确保数据安全和隐私保护。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">安全措施</h3>
              <p className="text-fd-muted-foreground">
                由于所有数据都存储在本地，您的信息不会传输到任何服务器，最大程度地保护您的隐私安全。
              </p>
            </div>
          </div>
        </section>

        {/* Data Sharing */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">数据共享</h2>
          <p className="text-fd-muted-foreground mb-4">
            由于所有数据都存储在您的设备本地，我们不会与任何第三方共享您的信息：
          </p>
          <ul className="text-fd-muted-foreground space-y-2 list-disc list-inside">
            <li>您的数据不会传输到任何服务器</li>
            <li>我们不会收集或访问您的个人信息</li>
            <li>没有第三方可以访问您的数据</li>
            <li>您的隐私得到完全保护</li>
          </ul>
        </section>

        {/* Your Rights */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">您的权利</h2>
          <p className="text-fd-muted-foreground mb-4">
            由于所有数据都存储在您的设备上，您拥有完全的控制权：
          </p>
          <ul className="text-fd-muted-foreground space-y-2 list-disc list-inside">
            <li>完全控制您的所有倒数日数据</li>
            <li>随时修改或删除任何数据</li>
            <li>无需担心数据泄露或隐私问题</li>
            <li>应用完全离线运行，保护您的隐私</li>
          </ul>
        </section>

        {/* Contact Information */}
        <section className="bg-fd-muted/30 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-4">联系我们</h2>
          <p className="text-fd-muted-foreground mb-4">
            如果您对本隐私政策或我们的数据处理方式有任何疑问，请联系我们：
          </p>
          <div className="space-y-2">
            <p className="text-fd-muted-foreground">Email:</p>
            <a 
              href="mailto:yankewei1993@gmail.com?subject=倒数日-支持农历 Privacy Policy Question" 
              className="text-fd-foreground font-semibold text-lg hover:underline"
            >
              yankewei1993@gmail.com
            </a>
          </div>
        </section>

        {/* Support Link */}
        <section className="text-center">
          <Link
            href="/support/countdown"
            className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
          >
            ← 返回支持页面
          </Link>
        </section>
      </div>
    </main>
  );
} 