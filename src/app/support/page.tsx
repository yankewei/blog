import Link from 'next/link';
import Image from 'next/image';

export default function SupportPage() {
  const apps = [
          {
        id: 'countdown',
        name: '倒数日-支持农历',
        description: '一款帮助您记录重要日期和事件的倒数日应用，支持农历和阳历。',
        icon: '/image/lunar-loop-logo.png',
        features: [
          '创建和管理多个倒数日计时器',
          '支持阳历和农历两种日历系统',
          '记录生日、纪念日、节日等重要事件',
          '简洁直观的用户界面'
        ]
      }
  ];

  return (
    <main className="flex flex-1 flex-col max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">支持中心</h1>
        <p className="text-fd-muted-foreground text-lg">
          选择应用获取支持信息和联系方式
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => (
          <div key={app.id} className="bg-fd-muted/30 rounded-lg p-6 border border-fd-border">
            <div className="text-center mb-4">
              <div className="mb-2">
                {app.icon.startsWith('/') ? (
                  <Image src={app.icon} alt={`${app.name} logo`} width={64} height={64} className="mx-auto object-contain" />
                ) : (
                  <div className="text-4xl">{app.icon}</div>
                )}
              </div>
              <h2 className="text-xl font-semibold mb-2">{app.name}</h2>
              <p className="text-fd-muted-foreground text-sm mb-4">{app.description}</p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">主要功能：</h3>
              <ul className="text-fd-muted-foreground space-y-1 list-disc list-inside text-sm">
                {app.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-2">
              <Link
                href={`/support/${app.id}`}
                className="flex-1 bg-fd-primary text-fd-primary-foreground px-4 py-2 rounded-md text-center text-sm font-medium hover:bg-fd-primary/90 transition-colors"
              >
                支持
              </Link>
              <Link
                href={`/privacy/${app.id}`}
                className="flex-1 bg-fd-secondary text-fd-secondary-foreground px-4 py-2 rounded-md text-center text-sm font-medium hover:bg-fd-secondary/90 transition-colors"
              >
                隐私政策
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="mb-4 text-xl font-semibold">联系我们</h2>
        <p className="text-fd-muted-foreground mb-4">
          如果您对我们的应用有任何疑问或需要帮助，请随时联系我们。
        </p>
        <div>
          <p className="text-fd-muted-foreground mb-2">Email:</p>
          <a 
            href="mailto:yankewei1993@gmail.com" 
            className="text-fd-foreground font-semibold text-lg hover:underline"
          >
            yankewei1993@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
} 