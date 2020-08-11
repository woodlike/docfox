export const dataFrontMatterComplete = `
---
name: Video
menu: Components
title: Video
---

import { Video } from '@wdlk/components';
import { useVideoControl } from '@wdlk/hooks';
import { useState } from 'react';

# Video Stage

Art directing videos on three different devices.

## Fully functional Video Stage Example
`;

export const resultDataComplete = `
import { Video } from '@wdlk/components';
import { useVideoControl } from '@wdlk/hooks';
import { useState } from 'react';

# Video Stage

Art directing videos on three different devices.

## Fully functional Video Stage Example
`;

export const dataFrontMatterNameOnly = `
---
name: Video33
---

import { Video } from '@wdlk/components';
import { useVideoControl } from '@wdlk/hooks';
import { useState } from 'react';

# Video Stage

Art directing videos on three different devices.

## Fully functional Video Stage Example
`;

export const resultNameOnly = `
import { Video } from '@wdlk/components';
import { useVideoControl } from '@wdlk/hooks';
import { useState } from 'react';

# Video Stage

Art directing videos on three different devices.

## Fully functional Video Stage Example
`;

export const dataFrontMatterVideoName = `
---
name: Code
menu: Components
---

# Code

## The Prism highlighter component for React.

Introduction
`;

export const resultVideoName = `
# Code

## The Prism highlighter component for React.

Introduction
`;

export const dataNoFrontMatter = `
import { Heading } from '@wdlk/components';

## Heading Families

Covering three families as defined in the theme heading props.

- **display**,
- **secondary**
- **campaign**

### Examples

<Heading as="h2" size="xxl">
  Healing Flowers Collection
</Heading>
<Heading as="h2" size="xxl" family="secondary">
  Healing Flowers Collection
</Heading>
<Heading as="h2" size="xxl" family="campaign">
  Healing Flowers Collection
</Heading>
`;
