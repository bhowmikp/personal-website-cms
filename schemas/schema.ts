// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import homepage from './homepage';
import experience from './experience';
import projects from './projects';
import archive from './archive';
import blog from './blog';
import siteSettings from './siteSettings';
import recognition from './recognition';
import aboutMe from './aboutMe';
import blogPage from './blogPage';

import richtext from './types/richtext';
import figure from './types/figure';
import urlLinkText from './types/urlLinkText';
import horizontalRow from './types/customHr';
import pageHeading from './types/pageHeading';
import ctaBlogs from './types/ctaBlogs';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    homepage,
    experience,
    projects,
    archive,
    blog,
    siteSettings,
    recognition,
    aboutMe,
    blogPage,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    richtext,
    figure,
    urlLinkText,
    horizontalRow,
    pageHeading,
    ctaBlogs
  ]),
})
