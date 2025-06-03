import BarChart from "./components/BarChart";
import { InteractiveMap } from "./components/InteractiveMap";

function App() {
  return (
    <>
      <div className="flex h-[100dvh] w-[100dvw] flex-col overflow-hidden">
        {/* Header */}
        <header className="border-b-1 border-[#D4D4D4] px-[2.5rem] py-[1rem]">
          <a href="/">
            <h1 className="text-2xl font-bold">BantayBayan</h1>
          </a>
        </header>
        {/* Main Content */}
        <main className="flex flex-1">
          <InteractiveMap />
          <div className="absolute bottom-[50px] left-[50px] flex flex-col rounded-2xl border-1 border-[#D4D4D4] bg-white">
            <h1 className="mb-[8px] border-b-1 border-[#D4D4D4] px-[1rem] py-[0.75rem] pb-[8px] font-semibold">
              Legends
            </h1>
            <h2 className="mb-[8px] inline-flex items-center border-b-1 border-[#D4D4D4] px-[1rem] pb-[8px]">
              <span
                className="material-symbols-outlined text-[#D50000]"
                style={{
                  fontVariationSettings:
                    "'FILL' 1, 'wght' 100, 'GRAD' 0, 'opsz' 16",
                }}
              >
                circle
              </span>
              <span className="text-sm font-medium">Moderate Risk</span>
            </h2>
            <h2 className="mb-[8px] inline-flex items-center border-b-1 border-[#D4D4D4] px-[1rem] pb-[8px]">
              <span
                className="material-symbols-outlined text-[#FF6D00]"
                style={{
                  fontVariationSettings:
                    "'FILL' 1, 'wght' 100, 'GRAD' 0, 'opsz' 16",
                }}
              >
                circle
              </span>
              <span className="text-sm font-medium">High Risk</span>
            </h2>
            <h2 className="inline-flex items-center px-[1rem] pb-[0.75rem]">
              <span
                className="material-symbols-outlined text-[#FFD600]"
                style={{
                  fontVariationSettings:
                    "'FILL' 1, 'wght' 100, 'GRAD' 0, 'opsz' 16",
                }}
              >
                circle
              </span>
              <span className="text-sm font-medium">Low Risk</span>
            </h2>
          </div>
          {/* Sidebar */}
          <div className="flex w-1/2 flex-col border-l-1 border-[#D4D4D4]">
            {/* Chart Container */}
            <section className="flex flex-col border-b-1 border-[#D4D4D4] px-[2rem] pt-[1.5rem]">
              <h1 className="mb-[1.5rem] border-b-1 border-[#D4D4D4] pb-[0.5rem] text-xl font-bold">
                Incidents
              </h1>
              {/* Card Container */}
              <div className="mb-[1.5rem] flex gap-[1rem] border-b-1 border-[#D4D4D4] pb-[0.5rem]">
                {/* Cards */}
                <div className="border-r-1 border-[#D4D4D4] pr-[1rem]">
                  <h2 className="mb-[1rem] font-medium text-nowrap">
                    Reported
                  </h2>
                  <p className="mb-[0.75rem] text-4xl font-semibold">67</p>
                  <h3 className="inline-flex items-center gap-[2.5px] text-xs font-light text-nowrap">
                    <span className="material-symbols-outlined text-green-500">
                      trending_up
                    </span>
                    <span className="text-base font-semibold text-green-500">
                      8%
                    </span>
                    from last week
                  </h3>
                </div>
                <div className="border-r-1 border-[#D4D4D4] pr-[1rem]">
                  <h2 className="mb-[1rem] font-medium text-nowrap">
                    Under Investigation
                  </h2>
                  <p className="mb-[0.75rem] text-4xl font-semibold">150</p>
                  <h3 className="inline-flex items-center gap-[2.5px] text-xs font-light text-nowrap">
                    <span className="material-symbols-outlined text-green-500">
                      trending_up
                    </span>
                    <span className="text-base font-semibold text-green-500">
                      20%
                    </span>
                    from last week
                  </h3>
                </div>
                <div className="border-r-1 border-[#D4D4D4] pr-[1rem]">
                  <h2 className="mb-[1rem] font-medium text-nowrap">
                    Action Taken
                  </h2>
                  <p className="mb-[0.75rem] text-4xl font-semibold">88</p>
                  <h3 className="inline-flex items-center gap-[2.5px] text-xs font-light text-nowrap">
                    <span className="material-symbols-outlined text-red-500">
                      trending_down
                    </span>
                    <span className="text-base font-semibold text-red-500">
                      3%
                    </span>
                    from last week
                  </h3>
                </div>
                <div>
                  <h2 className="mb-[1rem] font-medium text-nowrap">
                    Resolved
                  </h2>
                  <p className="mb-[0.75rem] text-4xl font-semibold">39</p>
                  <h3 className="inline-flex items-center gap-[2.5px] text-xs font-light text-nowrap">
                    <span className="material-symbols-outlined text-red-500">
                      trending_down
                    </span>
                    <span className="text-base font-semibold text-red-500">
                      18%
                    </span>
                    from last week
                  </h3>
                </div>
              </div>
              {/* Types of Incidents */}
              <div className="flex gap-[1rem]">
                <h3 className="inline-flex items-center">
                  <span
                    className="material-symbols-outlined text-[#ea3737]"
                    style={{
                      fontVariationSettings:
                        "'FILL' 1, 'wght' 100, 'GRAD' 0, 'opsz' 16",
                    }}
                  >
                    circle
                  </span>
                  <span className="text-sm font-medium">Theft</span>
                </h3>
                <h3 className="inline-flex items-center">
                  <span
                    className="material-symbols-outlined text-[#B5CF66]"
                    style={{
                      fontVariationSettings:
                        "'FILL' 1, 'wght' 100, 'GRAD' 0, 'opsz' 16",
                    }}
                  >
                    circle
                  </span>
                  <span className="text-sm font-medium">Vandalism</span>
                </h3>
                <h3 className="inline-flex items-center">
                  <span
                    className="material-symbols-outlined text-[#F97316]"
                    style={{
                      fontVariationSettings:
                        "'FILL' 1, 'wght' 100, 'GRAD' 0, 'opsz' 16",
                    }}
                  >
                    circle
                  </span>
                  <span className="text-sm font-medium">Harrasment</span>
                </h3>
                <h3 className="inline-flex items-center">
                  <span
                    className="material-symbols-outlined text-[#3B82F6]"
                    style={{
                      fontVariationSettings:
                        "'FILL' 1, 'wght' 100, 'GRAD' 0, 'opsz' 16",
                    }}
                  >
                    circle
                  </span>
                  <span className="text-sm font-medium">Noise Complaint</span>
                </h3>
                <h3 className="inline-flex items-center">
                  <span
                    className="material-symbols-outlined text-[#8852f6]"
                    style={{
                      fontVariationSettings:
                        "'FILL' 1, 'wght' 100, 'GRAD' 0, 'opsz' 16",
                    }}
                  >
                    circle
                  </span>
                  <span className="text-sm font-medium">Youth Misconduct</span>
                </h3>
              </div>
              <BarChart />
            </section>
            {/* Notification Section */}
            <section className="no-scrollbar flex flex-1 flex-col overflow-y-scroll border-b-1 border-[#D4D4D4] px-[2rem] py-[1.5rem]">
              {/* Message Container */}
              <div className="flex flex-col">
                {/* Message Card */}
                <div className="mb-[1.5rem] flex flex-col border-b-1 border-[#D4D4D4] pb-[1rem]">
                  <div className="mb-[0.5rem] flex items-baseline justify-between">
                    {/* Title */}
                    <h1 className="font-medium">
                      Snatching Incident Under Investigation
                    </h1>
                    {/* Date */}
                    <p className="text-xs">June 03, 2025</p>
                  </div>
                  {/* Description */}
                  <p className="mb-[1rem] line-clamp-2 text-justify text-sm wrap-break-word">
                    A snatching incident occurred near the main entrance of the
                    City Park on Sunday evening. According to witnesses, an
                    unknown individual grabbed a woman's handbag and fled the
                    scene on a motorcycle. Authorities are reviewing CCTV
                    footage and have launched an investigation. The victim is
                    safe and cooperating with the police.
                  </p>
                  {/* Tags */}
                  <div className="flex gap-[0.5rem] text-sm">
                    <h2 className="rounded-full bg-gray-200 px-[1rem] py-[0.5rem]">
                      Community Report
                    </h2>
                    <h2 className="rounded-full bg-gray-200 px-[1rem] py-[0.5rem]">
                      Theft
                    </h2>
                  </div>
                </div>
                <div className="mb-[1.5rem] flex flex-col border-b-1 border-[#D4D4D4] pb-[1rem]">
                  <div className="mb-[0.5rem] flex items-baseline justify-between">
                    <h1 className="font-medium">
                      Vandalism at Community Library Resolved
                    </h1>
                    <p className="text-xs">June 03, 2025</p>
                  </div>
                  <p className="mb-[1rem] line-clamp-2 text-justify text-sm wrap-break-word">
                    The recent vandalism at the Greenfield Community Library has
                    been resolved. Security cameras helped identify the suspect,
                    a local teenager, who admitted to the act. The individual
                    has apologized and agreed to participate in community
                    service. Repairs to the damaged windows and walls have
                    already been completed.
                  </p>
                  <div className="flex gap-[0.5rem] text-sm">
                    <h2 className="rounded-full bg-gray-200 px-[1rem] py-[0.5rem]">
                      Resolved
                    </h2>
                    <h2 className="rounded-full bg-gray-200 px-[1rem] py-[0.5rem]">
                      Youth Offense
                    </h2>
                    <h2 className="rounded-full bg-gray-200 px-[1rem] py-[0.5rem]">
                      Vandalism
                    </h2>
                  </div>
                </div>
                <div className="mb-[1.5rem] flex flex-col border-b-1 border-[#D4D4D4] pb-[1rem]">
                  <div className="mb-[0.5rem] flex items-baseline justify-between">
                    <h1 className="font-medium">
                      Noise Complaint at Legazpi Street Addressed
                    </h1>
                    <p className="text-xs">June 03, 2025</p>
                  </div>
                  <p className="mb-[1rem] line-clamp-2 text-justify text-sm wrap-break-word">
                    Multiple residents reported loud music and disturbances
                    coming from a house on Oak Street late Saturday night.
                    Authorities responded to the scene and issued a formal
                    warning to the homeowner. Noise levels were reduced shortly
                    after. No further complaints have been received.
                  </p>
                  <div className="flex gap-[0.5rem] text-sm">
                    <h2 className="rounded-full bg-gray-200 px-[1rem] py-[0.5rem]">
                      Noise Complaint
                    </h2>
                    <h2 className="rounded-full bg-gray-200 px-[1rem] py-[0.5rem]">
                      Authorities Notified
                    </h2>
                    <h2 className="rounded-full bg-gray-200 px-[1rem] py-[0.5rem]">
                      Warning Issued
                    </h2>
                  </div>
                </div>
                <div className="mb-[1.5rem] flex flex-col border-b-1 border-[#D4D4D4] pb-[1rem]">
                  <div className="mb-[0.5rem] flex items-baseline justify-between">
                    <h1 className="font-medium">
                      Bike Theft Reported at Buendia LRT Station
                    </h1>
                    <p className="text-xs">June 03, 2025</p>
                  </div>
                  <p className="mb-[1rem] line-clamp-2 text-justify text-sm wrap-break-word">
                    A commuter reported their bicycle stolen from the Central
                    Transit Station on Monday morning. The bike was secured with
                    a cable lock, which appears to have been cut. Authorities
                    recommend using U-locks and parking in well-lit,
                    high-traffic areas. CCTV footage is being reviewed for
                    leads.
                  </p>
                  <div className="flex gap-[0.5rem] text-sm">
                    <h2 className="rounded-full bg-gray-200 px-[1rem] py-[0.5rem]">
                      Theft
                    </h2>
                    <h2 className="rounded-full bg-gray-200 px-[1rem] py-[0.5rem]">
                      Stay Alert
                    </h2>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
