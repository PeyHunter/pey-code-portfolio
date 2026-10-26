const links = [
  { type: "URL", name: "live", href: "https://peytonhunter.com", label: "peytonhunter.com" },
  { type: "URL", name: "argocd", href: "https://argocd.peytonhunter.com", label: "argocd.peytonhunter.com" },
  { type: "GitHub", name: "gitops", href: "https://github.com/PeyHunter/k3s-gitOps", label: "k3s-gitOps" },
  { type: "YAML", name: "externalDns", href: "https://github.com/PeyHunter/k3s-gitOps/blob/main/apps/external-dns.yaml", label: "external-dns.yaml" },
  { type: "YAML", name: "CI_CD", href: "https://github.com/PeyHunter/pey-code-portfolio/blob/main/.github/workflows/ci.yml", label: "github-workflows" },
];

// The machines in the cluster, joined over Tailscale
const nodes = [
  { name: "k3s-1", role: "server", detail: "VPS · control plane + public traffic" },
  { name: "k3s-2", role: "agent", detail: "old MacBook at home · worker" },
];

// Each hop a commit takes on its way to peytonhunter.com
const pipeline = [
  { tool: "git push", detail: "pey-code-portfolio → main" },
  { tool: "GitHub Actions", detail: "build image → ghcr.io, bump tag in k3s-gitOps" },
  { tool: "Argo CD", detail: "sees the new commit, syncs the cluster" },
  { tool: "k3s-1", detail: "rolls out 2 replicas behind Traefik" },
  { tool: "cert-manager", detail: "Let's Encrypt certificate for HTTPS" },
  { tool: "external-dns", detail: "writes the DNS record in Cloudflare" },
];

export default function K3sCluster() {
  return (
    <div className="py-24 border-b border-white/20 px-2 relative flex flex-col xl:flex-row justify-between items-start gap-12 w-full">
      <div className="z-10 flex-shrink-0">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter hover:text-blue-400 transition-all duration-500 mb-6">
          k3s Cluster
        </h2>

        <div className="font-reddit text-sm md:text-base leading-relaxed tracking-wider">
          <div>
            <span className="text-blue-400">String</span> category ={" "}
            <span className="text-orange-300">"DevOps / GitOps"</span>;
          </div>
          <div>
            <span className="text-blue-400">String[]</span> tech = {"{"}
            "k3s", "Tailscale", "Argo CD", "external-dns", "cert-manager", "Cloudflare"
            {"}"};
          </div>
          {links.map((link) => (
            <div key={link.name}>
              <span className="text-blue-400">{link.type}</span> {link.name} ={" "}
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-300 hover:text-blue-400 underline decoration-white/10"
              >
                "{link.label}"
              </a>
              ;
            </div>
          ))}

          <div className="mt-8 md:max-w-lg">
            <p className="text-white/60 font-reddit leading-relaxed">
              This website runs on my own k3s cluster, which I set up by hand
              to learn Kubernetes. It has two nodes: k3s-1, a VPS that runs the
              control plane and takes the public traffic, and k3s-2, an old
              MacBook at home that joins as a worker. Tailscale connects them
              in a private, encrypted network, so they can talk across the
              internet without opening extra ports.
            </p>
            <p className="mt-4 text-white/60 font-reddit leading-relaxed">
              Everything in the cluster is described in one Git repo, and Argo
              CD keeps the cluster in sync with it. external-dns creates the
              Cloudflare DNS records from my Ingresses, and cert-manager gets
              the HTTPS certificates.
            </p>
            <p className="mt-4 text-blue-400/80 font-reddit text-sm italic leading-relaxed">
              You are looking at it right now: every push to this portfolio is
              built into an image and deployed to the cluster through GitOps.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full xl:w-[60%] max-w-[900px] self-center">
        <div className="bg-[#1a1a1a] w-full h-10 rounded-t-2xl border-x border-t border-white/20 flex items-center px-6 gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
          <div className="ml-4 text-[10px] text-white/20 font-reddit uppercase tracking-[0.2em]">
            k3s-gitops / deploy-flow
          </div>
        </div>

        <div className="w-full bg-[#0d0d0d] rounded-b-2xl border-x border-b border-white/20 p-6 md:p-10 font-reddit">
          <ol className="flex flex-col">
            {pipeline.map((step, i) => (
              <li key={step.tool} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="w-8 h-8 rounded-full border border-blue-400/60 text-blue-400 text-xs flex items-center justify-center flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < pipeline.length - 1 && <span className="w-px flex-1 bg-white/15 my-1"></span>}
                </div>
                <div className="pb-6">
                  <div className="text-orange-300 text-sm md:text-base tracking-wider">{step.tool}</div>
                  <div className="text-white/50 text-xs md:text-sm">{step.detail}</div>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-2 pt-4 border-t border-white/10">
            <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-3">nodes · tailscale</div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              {nodes.map((node, i) => (
                <div key={node.name} className="flex flex-col sm:flex-row sm:items-center gap-3">
                  {i > 0 && <span className="text-white/30 text-xs tracking-wider">⇄</span>}
                  <div className="border border-white/15 rounded-lg px-4 py-2">
                    <div className="text-orange-300 text-sm tracking-wider">
                      {node.name} <span className="text-white/40 text-xs">({node.role})</span>
                    </div>
                    <div className="text-white/50 text-xs">{node.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/10 text-xs md:text-sm text-white/40 tracking-wider">
            <span className="text-green-400/80">●</span> live at{" "}
            <span className="text-white/70">https://peytonhunter.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
