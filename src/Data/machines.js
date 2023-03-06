const machines = [
  {
    id: 'AF-0001',
    name: 'Lecho Glatt',
    status: 'clean',
    lastCleanedDate: new Date('2023-03-03'),
    assetCode: 'AF-0001',
    cleaningFreq: 72,
  },
  {
    id: 'AF-0002',
    name: 'Mezclador en V1',
    status: 'maintenance',
    lastCleanedDate: new Date('2023-03-04'),
    assetCode: 'AF-0002',
    cleaningFreq: 72,
  },
  {
    id: 'AF-0003',
    name: 'Mezclador en V2',
    status: 'process',
    lastCleanedDate: new Date('2023-03-05'),
    assetCode: 'AF-0003',
    cleaningFreq: 72,
  },
  {
    id: 'AF-0004',
    name: 'Killian KTP-420',
    status: 'toBeCleaned',
    lastCleanedDate: new Date(),
    assetCode: 'AF-0004',
    cleaningFreq: 72,
  },
  {
    id: 'AF-0005',
    name: 'Prexima 800 53-D',
    status: 'cleaning',
    lastCleanedDate: new Date('2023-02-14'),
    assetCode: 'AF-0005',
    cleaningFreq: 72,
  },
  {
    id: 'AF-0006',
    name: 'Encapsuladora',
    status: 'clean',
    lastCleanedDate: new Date('2023-02-14'),
    assetCode: 'AF-0006',
    cleaningFreq: 72,
  },
  {
    id: 'AF-0007',
    name: 'Bombo Glatt',
    status: 'clean',
    lastCleanedDate: new Date('2023-02-14'),
    assetCode: 'AF-0007',
    cleaningFreq: 72,
  },
  {
    id: 'AF-0008',
    name: 'Blistera 1',
    status: 'clean',
    lastCleanedDate: new Date('2023-02-14'),
    assetCode: 'AF-0008',
    cleaningFreq: 72,
  },
  {
    id: 'AF-0009',
    name: 'Envasadora Tecnomaco',
    status: 'clean',
    lastCleanedDate: new Date('2023-02-14'),
    assetCode: 'AF-0009',
    cleaningFreq: 72,
  },
]

export default machines;
