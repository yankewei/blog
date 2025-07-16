export default function SupportPage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center max-w-2xl mx-auto px-4">
      <div className="mb-8 text-left">
        <h2 className="mb-4 text-xl font-semibold text-center">倒计时</h2>
        <div className="bg-fd-muted/30 rounded-lg p-6 mb-6">
          <p className="text-fd-muted-foreground mb-3">
            This is a countdown recording app that helps you track important dates and events in your life.
          </p>
          <p className="text-fd-muted-foreground mb-3">
            <strong className="text-fd-foreground">Key Features:</strong>
          </p>
          <ul className="text-fd-muted-foreground space-y-2 list-disc list-inside">
            <li>Create and manage multiple countdown timers</li>
            <li>Support for both Gregorian calendar (阳历) and Chinese lunar calendar (农历)</li>
            <li>Track days until important events like birthdays, anniversaries, holidays</li>
            <li>Clean and intuitive user interface</li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <h2 className="mb-4 text-xl font-semibold">Contact Support</h2>
        <p className="text-fd-muted-foreground mb-4">
          If you need support or have any questions about the app, please feel free to contact me.
        </p>
        <div>
          <p className="text-fd-muted-foreground mb-2">Email:</p>
          <a 
            href="mailto:yankewei@outlook.com" 
            className="text-fd-foreground font-semibold text-lg hover:underline"
          >
            yankewei199@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
} 