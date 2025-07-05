import { Card, CardContent } from "@/components/ui/card";

export default function ShapLinkPage() {
  return (
    <section className="container py-8 space-y-8">
      <h1 className="text-3xl font-bold">ShapLink</h1>

      {/* Live demo */}
      <Card>
        <CardContent className="aspect-video">
          <iframe
            src="https://shaplink-demo.vercel.app"
            className="w-full h-full rounded-2xl"
          />
        </CardContent>
      </Card>

      {/* Loom video */}
      <Card>
        <CardContent className="aspect-video">
          <iframe
            src="https://www.loom.com/embed/YourLoomID"
            allowFullScreen
            className="w-full h-full rounded-2xl"
          />
        </CardContent>
      </Card>

      {/* Links */}
      <div className="flex gap-4">
        <a className="btn" href="https://github.com/ElevateIQ/shaplink">
          GitHub Repo
        </a>
        <a className="btn" href="https://shaplink-docs.vercel.app">
          API Docs
        </a>
      </div>
    </section>
  );
}
