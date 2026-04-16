import { CheckCircle2, Heart, Medal, Target, Users } from 'lucide-react';
import missionImage from '../assets/frr.png';
import { useEffect, useState } from 'react';

const impactStats = [
  { label: 'Active Users', end: 100, suffix: 'K+' },
  { label: 'Consultations', end: 500, suffix: 'K+' },
  { label: 'Satisfaction Rate', end: 98, suffix: '%' },
  { label: 'Availability', end: 24, suffix: '/7' },
];

function AboutPage() {
  const [counts, setCounts] = useState(impactStats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((value, index) => {
          const target = impactStats[index].end;
          if (value >= target) return target;
          const increment = Math.max(1, Math.ceil(target / 60));
          return Math.min(target, value + increment);
        })
      );
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="about-hero px-6 py-24 text-center md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-white px-8 py-14">
          <h1 className="text-5xl font-semibold tracking-[-0.06em] text-[#0f172a] sm:text-6xl md:text-[4.9rem]">
            About AfyaCare
          </h1>
          <p className="mx-auto mt-8 max-w-5xl text-xl leading-[1.45] text-[#506177] sm:text-2xl md:text-[2.15rem]">
            We&apos;re on a mission to make quality healthcare accessible to everyone through the power of artificial intelligence and compassionate care.
          </p>
        </div>
      </section>

      <section className="bg-[#f6f7f6] px-6 py-18 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1760px] items-center gap-12 rounded-[36px] bg-white px-6 py-8 shadow-[0_24px_60px_rgba(18,38,31,0.06)] md:px-10 md:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#3f9148]">
              Our mission
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[#0f172a] md:text-5xl">
              Smart healthcare support with a human touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5a6778] md:text-xl">
              AfyaCare believes everyone deserves access to quality healthcare guidance. Our AI-powered platform combines advanced technology with medical expertise to provide instant, reliable health information and support.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#5a6778] md:text-xl">
              We're not here to replace doctors – we're here to bridge the gap, making it easier for you to understand your health, connect with healthcare professionals, and take control of your wellbeing.
            </p>
          </div>

          <div>
            <img
              src={missionImage}
              alt="Our mission healthcare facility"
              className="h-full max-h-[480px] w-full rounded-[28px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1760px]">
          <h2 className="mb-12 text-center text-4xl font-semibold tracking-[-0.05em] text-[#0f172a]">
            Our Values
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[28px] bg-white p-8 shadow-[0_24px_60px_rgba(18,38,31,0.06)]">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7f7ec] text-[#2f8b3a]">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-[#0f172a]">Patient-Centered Care</h3>
              <p className="text-lg leading-8 text-[#5a6778]">
                We put your health and wellbeing at the center of everything we do.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-8 shadow-[0_24px_60px_rgba(18,38,31,0.06)]">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7f7ec] text-[#2f8b3a]">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-[#0f172a]">Innovation</h3>
              <p className="text-lg leading-8 text-[#5a6778]">
                Leveraging cutting-edge AI technology to revolutionize healthcare access.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-8 shadow-[0_24px_60px_rgba(18,38,31,0.06)]">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7f7ec] text-[#2f8b3a]">
                <Medal className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-[#0f172a]">Excellence</h3>
              <p className="text-lg leading-8 text-[#5a6778]">
                Committed to providing the highest quality medical guidance and support.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-8 shadow-[0_24px_60px_rgba(18,38,31,0.06)]">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7f7ec] text-[#2f8b3a]">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-[#0f172a]">Accessibility</h3>
              <p className="text-lg leading-8 text-[#5a6778]">
                Making healthcare accessible to everyone, anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1f7a31] px-6 py-24 text-white md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1760px]">
          <h2 className="mb-12 text-center text-4xl font-semibold tracking-[-0.05em]">
            Our Impact
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((item, index) => (
              <div key={item.label} className="rounded-[28px] bg-white/10 p-8 text-center">
                <p className="mb-3 text-5xl font-semibold">
                  {counts[index]}
                  {item.suffix}
                </p>
                <p className="text-lg font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1760px] grid gap-8 lg:grid-cols-[0.95fr_0.85fr]">
          <div>
            <h2 className="mb-6 text-4xl font-semibold tracking-[-0.05em] text-[#0f172a]">
              What We Offer
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-[#5a6778]">
              AfyaCare provides a comprehensive suite of healthcare tools and services designed to support your health journey.
            </p>

            <ul className="mt-10 space-y-4">
              { [
                'AI-powered health assessments',
                'Instant symptom checking',
                'Appointment scheduling',
                'Prescription reminders',
                'Health records management',
                'Telemedicine integration',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-lg text-[#243243]">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e7f7ec] text-[#2f8b3a]">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[36px] bg-[#f6f7f6] p-10 shadow-[0_24px_60px_rgba(18,38,31,0.06)]">
            <h2 className="mb-6 text-4xl font-semibold tracking-[-0.05em] text-[#0f172a]">
              Join Our Community
            </h2>
            <p className="text-lg leading-8 text-[#5a6778]">
              Become part of a growing community of users who trust AfyaCare for their healthcare needs. Experience the future of healthcare today.
            </p>

            <ul className="mt-10 space-y-4">
              { [
                'Free to get started',
                'No credit card required',
                'Cancel anytime',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-lg text-[#243243]">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e7f7ec] text-[#2f8b3a]">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;