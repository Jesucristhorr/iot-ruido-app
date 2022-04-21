// import { TRPCError } from '@trpc/server';
// import { z } from 'zod';
import { createRouter } from '~/server/createRouter';
import { prisma } from '~/server/prisma';

export const noiseRouter = createRouter().query('all', {
  async resolve() {
    const noiseMeasurements = await prisma.noiseInfo.findMany();
    return noiseMeasurements;
  },
});
