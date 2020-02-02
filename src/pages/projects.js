import React from 'react'
import { ProjectsPageTemplate } from '../containers/Projects'

export default function ProjectsPage() {
  return (
    <ProjectsPageTemplate
      title="Open-source projects"
      intro={
        <>
          Some projects i worked on.
        </>
      }
      projects={{
        jstNgValidators: {
          label: 'A collection of Angular validators',
          description: (
            <>
              A collections of Angular 2+ validators for Reactive Forms. {' '}
            </>
          ),
        },
      }}
    />
  )
}
