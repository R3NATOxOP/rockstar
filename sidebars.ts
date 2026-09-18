import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'CVP – Civilian Vehicle Pack',
      items: ['cvp/index', 'cvp/developer-details', 'cvp/livery-templates'],
    },
    {
      type: 'category',
      label: 'EVP – Emergency Vehicle Pack',
      items: ['evp/index', 'evp/developer-details', 'evp/livery-templates'],
    },
    {
      type: 'category',
      label: 'EUP – Clothing & PEDs',
      items: ['eup/k9-ped-pack-developer-details', 'eup/police-ems-clothing-developer-extras'],
    },
    {
      type: 'category',
      label: 'onx-mdw',
      items: ['onx-mdw/index', 'onx-mdw/user-guide'],
    },
    {
      type: 'category',
      label: 'onx_mp_faces',
      items: ['onx-mp-faces/index'],
    },
    'community-asset-submission-guidelines',
  ],
};

export default sidebars;
