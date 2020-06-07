import * as React from 'react';

import { Docs } from '@wdlk/components';

export const Logo: React.FC = (): JSX.Element => {
  return (
    <div>
      <Docs.Logo
        minX={0}
        minY={0}
        width={92}
        height={46}
        size="S"
        title="Woodlike Docs"
        desc="Discover the guidelines and thought processes behind our APIs and design system approach."
        path={<Docs.Path />}
      />
    </div>
  );
};

Logo.displayName = 'Logo';
