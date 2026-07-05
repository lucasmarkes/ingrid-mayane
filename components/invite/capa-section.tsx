// components/invite/capa-section.tsx
import { Panel } from "./panel";
import { Reveal } from "./reveal";
import { Divider } from "./art";
import { BallerinaCapa } from "./ballerina-capa";

export function CapaSection() {
  return (
    <section aria-label="Capa do convite">
      <Panel>
        <div className="flex flex-col items-center px-6 py-12 text-center sm:py-14">
          <Reveal>
            <BallerinaCapa className="mx-auto h-64 w-auto text-script/80 sm:h-72" />
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className="mt-10 font-script text-script leading-none [font-size:clamp(2.75rem,10vw,4.25rem)]">
              Ingrid Mayane
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <Divider className="mx-auto mt-6 w-44" />
            <p className="mt-4 font-caps text-ink tracking-[0.35em] [font-size:clamp(1.05rem,3.5vw,1.35rem)]">
              15 Anos
            </p>
            <Divider className="mx-auto mt-4 w-44" />
          </Reveal>
        </div>
      </Panel>
    </section>
  );
}
