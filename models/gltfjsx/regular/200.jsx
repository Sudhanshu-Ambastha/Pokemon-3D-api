/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/200.glb -o models/gltfjsx/regular/200.jsx 
Author: Vila (https://sketchfab.com/VilaPereira)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/misdreavus-55233fb017cb4d0a9f20dcd1c7daca11
Title: Misdreavus
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/200.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.Texture} skeleton={nodes.Object_9.skeleton} position={[0, -0.19, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.308} />
        <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.Lens} skeleton={nodes.Object_10.skeleton} position={[0, -0.19, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.308} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/200.glb')
