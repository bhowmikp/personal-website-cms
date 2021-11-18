import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Homepage')
        .child(
          S.document()
            .schemaType('homepage')
            .documentId('homepage')
        ),
      S.listItem()
        .title('Experience')
        .child(
          S.document()
            .schemaType('experience')
            .documentId('experience')
        ),
      S.listItem()
        .title('Archive')
        .child(
          S.document()
            .schemaType('archive')
            .documentId('archive')
        ),
      S.listItem()
        .title('Projects')
        .child(
          S.document()
            .schemaType('projects')
            .documentId('projects')
        ),
      S.listItem()
        .title('Recognitions')
        .child(
          S.document()
            .schemaType('recognition')
            .documentId('recognition')
        ),
      ...S.documentTypeListItems().filter(
        listItem => ![
          'siteSettings',
          'homepage',
          'experience',
          'projects',
          'archive',
          'recognition'
        ].includes(listItem.getId()))
    ]);