import React from 'react'
import { ProjectsPageTemplate } from '../containers/Projects'

export default function ProjectsPage() {
  return (
    <ProjectsPageTemplate
      title="Projetos open-source"
      intro={
        <>
          Projetos open-source que foram desenvolvidos.
        </>
      }
      projects={{
        jstNgValidators: {
          label: 'A collection of Angular validators',
          description: (
            <>
              A collections of Angular 2+ validators for Reactive Forms.
            </>
          ),
        },
        useViaCep: {
          label: 'React hook to fetch Brazilian CEP\'s using ViaCEP api.',
          description: (
            <>
              React hook to fetch Brazilian CEP's using ViaCEP api.
            </>
          ),
        },
      }}
    />
  )
}
