// src/components/BootstrapClient.jsx
'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.esm.js');
  }, []);

  return null;
}
