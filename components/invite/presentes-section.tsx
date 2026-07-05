'use client'

import { Divider } from './art'
import { IconBloom, IconDress, IconHeel, IconTrousers } from './icons'
import { Panel } from './panel'
import { Reveal } from './reveal'
import { BodyText, Eyebrow, ScriptTitle } from './typography'

const infoCards = [
  { icon: IconDress, label: 'Vestuário superior', value: 'PP / P' },
  { icon: IconTrousers, label: 'Vestuário inferior', value: '34' },
  { icon: IconHeel, label: 'Calçado', value: '36' },
  { icon: IconBloom, label: 'Estilo', value: 'Básico e minimalista' },
]

const suggestions = [
  'Perfumes e body splashes (fragrâncias doces, com baunilha)',
  'Maquiagens e acessórios de maquiagem',
  'Acessórios',
  'Bolsas',
  'Roupas',
  'Calçados',
  'Pijamas',
  'Artigos de ballet',
]

export function PresentesSection() {
  return (
    <section id="presentes" className="flex flex-col items-center">
      <Panel>
        <div className="relative text-center">
          <Reveal>
            <Eyebrow>Com carinho</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <ScriptTitle className="mt-2">Guia de Presentes</ScriptTitle>
          </Reveal>
          <Reveal delay={0.14}>
            <Divider />
          </Reveal>
          <Reveal delay={0.2}>
            <BodyText className="max-w-[42ch]">
              Caso deseje presentear e esteja em dúvida sobre o que escolher,
              este guia reúne algumas informações e sugestões para ajudar.
            </BodyText>
          </Reveal>
          <Reveal delay={0.24}>
            <BodyText className="mt-3 max-w-[42ch] text-mutedrose">
              As ideias são apenas uma referência. Sinta-se à vontade para
              escolher qualquer outra opção que considere especial.
            </BodyText>
          </Reveal>
          <Reveal delay={0.3}>
            <ScriptTitle as="h3" className="mt-9">
              Informações úteis
            </ScriptTitle>
          </Reveal>
          <Reveal delay={0.34}>
            <div className="mt-5 grid grid-cols-2 gap-3 min-[460px]:grid-cols-4">
              {infoCards.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex flex-col items-center rounded-[4px] border border-[rgba(160,109,107,.28)] bg-blush-1/40 px-3 py-4 text-center"
                >
                  <Icon className="h-7 w-7 text-btn-a" />
                  <span className="mt-2 font-caps text-[9px] uppercase leading-tight tracking-[0.22em] text-mutedrose">
                    {label}
                  </span>
                  <span className="mt-1 font-serifd text-[15px] font-medium leading-tight text-ink">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <ScriptTitle as="h3" className="mt-9">
              Sugestões
            </ScriptTitle>
          </Reveal>
          <Reveal delay={0.44}>
            <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2.5 text-left min-[460px]:grid-cols-2">
              {suggestions.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-floret/70"
                  />
                  <span className="font-serifd text-[16px] leading-snug text-body">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Panel>
    </section>
  )
}
