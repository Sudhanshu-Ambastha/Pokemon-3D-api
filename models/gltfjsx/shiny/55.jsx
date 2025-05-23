/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/shiny/55.glb -o models/gltfjsx/shiny/55.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/shiny/55.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes['004_Hips']} />
      <primitive object={nodes['040_Spine1']} />
      <group position={[0, 1.777, 0.043]} rotation={[0.125, 0, Math.PI / 2]} scale={2.54}>
        <skinnedMesh geometry={nodes.Golduck_1.geometry} material={materials.Eye} skeleton={nodes.Golduck_1.skeleton} />
        <skinnedMesh geometry={nodes.Golduck_2.geometry} material={materials.BodySpc01} skeleton={nodes.Golduck_2.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/shiny/55.glb')
