declare module "vanta/dist/vanta.fog.min" {
  type VantaEffect = { destroy: () => void };
  const createFog: (options: Record<string, unknown>) => VantaEffect;
  export default createFog;
}
