/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/353.glb -o models/gltfjsx/regular/353.jsx 
Author: ijackprovostjr (https://sketchfab.com/ijackprovostjr)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pokemon-3ds-shuppet-36eb87d8194645b2895ff52f38862495
Title: Pokemon 3DS shuppet
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/353.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Mouth} skeleton={nodes.Object_7.skeleton} rotation={[Math.PI / 2, 0, 0]} scale={5.495} />
        <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.material} skeleton={nodes.Object_9.skeleton} rotation={[Math.PI / 2, 0, 0]} scale={5.495} />
        <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.Body} skeleton={nodes.Object_11.skeleton} rotation={[Math.PI / 2, 0, 0]} scale={5.495} />
        <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.Body} skeleton={nodes.Object_13.skeleton} rotation={[Math.PI / 2, 0, 0]} scale={5.495} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/353.glb')
