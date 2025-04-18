/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/galar/264.glb -o models/gltfjsx/galar/264.jsx 
Author: LunaEagle (https://sketchfab.com/LunaEagle)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/linoone-galar-86c32ac932054b2e9605d1d136c3232f
Title: Linoone Galar
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/galar/264.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh name="Object_111" geometry={nodes.Object_111.geometry} material={materials['pm0264_00_31-Body00']} skeleton={nodes.Object_111.skeleton} scale={0.5} />
        <skinnedMesh name="Object_113" geometry={nodes.Object_113.geometry} material={materials['pm0264_00_31-Body00']} skeleton={nodes.Object_113.skeleton} scale={0.5} />
        <skinnedMesh name="Object_114" geometry={nodes.Object_114.geometry} material={materials['pm0264_00_31-LEye']} skeleton={nodes.Object_114.skeleton} scale={0.5} />
        <skinnedMesh name="Object_115" geometry={nodes.Object_115.geometry} material={materials['pm0264_00_31-LEye']} skeleton={nodes.Object_115.skeleton} scale={0.5} />
        <skinnedMesh name="Object_117" geometry={nodes.Object_117.geometry} material={materials['pm0264_00_31-Body00']} skeleton={nodes.Object_117.skeleton} scale={0.5} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/galar/264.glb')
