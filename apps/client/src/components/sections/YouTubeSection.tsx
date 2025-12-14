import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

interface YouTubeVideo {
  id: string;
  videoId: string;
  title: string;
  description: string;
  thumbnail?: string;
}

const videos: YouTubeVideo[] = [
  {
    id: "1",
    videoId: "yDv9oEKQDB0",
    title: "SAP S/4HANA Expert Insights",
    description: "Expert guidance and insights on SAP S/4HANA implementation and best practices"
  },
  {
    id: "2",
    videoId: "MvmIxplAixI",
    title: "SAP Career Success Tips",
    description: "Quick tips and strategies to accelerate your SAP career journey"
  },
  {
    id: "3",
    videoId: "rdBVGsQv6c0",
    title: "SAP Professional Growth",
    description: "Learn how to grow as an SAP professional and achieve your career goals"
  }
];

export default function YouTubeSection() {
  const handleCollaborate = () => {
    const email = "Prashunshetty@tagskills.com";
    const subject = "Collaboration Opportunity";
    const body = "Hi Prashun,\n\nI would like to collaborate with you.\n\nPlease let me know your availability.\n\nThank you!";
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="videos" className="py-12 lg:py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-videos-title">
            🎯 SAP Mastery Vault
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
            Unlock your potential with expert insights, success stories, and practical SAP tutorials from Prashun Shetty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden hover-elevate active-elevate-2 transition-all" data-testid={`card-video-${video.id}`}>
              <a 
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-video bg-muted">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    data-testid={`img-video-thumbnail-${video.id}`}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center hover-elevate active-elevate-2">
                      <Play className="w-7 h-7 text-accent-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-foreground line-clamp-2" data-testid={`text-video-title-${video.id}`}>
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2" data-testid={`text-video-description-${video.id}`}>
                    {video.description}
                  </p>
                </div>
              </a>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 flex flex-wrap justify-center gap-4">
          <a 
            href="https://www.youtube.com/@tagskills9749" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-8 py-6 text-base rounded-xl shadow-lg transition-all" 
              data-testid="button-visit-channel"
            >
              Visit TagSkills Channel
            </Button>
          </a>
          <Button 
            size="lg" 
            onClick={handleCollaborate}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6 text-base rounded-xl shadow-lg transition-all" 
            data-testid="button-collaborate"
          >
            Collaborate
          </Button>
        </div>
      </div>
    </section>
  );
}
