/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/megashiny/282.glb -o models/gltfjsx/megashiny/282.jsx 
Author: Gh4xt3r (https://sketchfab.com/Gh4xt3r)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mega-gardevoir-shiny-8fe0bf2f1a74459db55f4ab21576e256
Title: Mega Gardevoir Shiny
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/megashiny/282.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes._rootJoint} />
      <skinnedMesh geometry={nodes.Object_412.geometry} material={materials.Head} skeleton={nodes.Object_412.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_413.geometry} material={materials.Head} skeleton={nodes.Object_413.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_414.geometry} material={materials.Head} skeleton={nodes.Object_414.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_415.geometry} material={materials.Head} skeleton={nodes.Object_415.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_416.geometry} material={materials.Head} skeleton={nodes.Object_416.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_417.geometry} material={materials.Hair_Short} skeleton={nodes.Object_417.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_418.geometry} material={materials.Hair_Long} skeleton={nodes.Object_418.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_419.geometry} material={materials.Eyes} skeleton={nodes.Object_419.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_420.geometry} material={materials.Eyes} skeleton={nodes.Object_420.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_421.geometry} material={materials.Eyes} skeleton={nodes.Object_421.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_422.geometry} material={materials.Heart_Eyes} skeleton={nodes.Object_422.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_423.geometry} material={materials.Heart_Eyes} skeleton={nodes.Object_423.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_424.geometry} material={materials.Head} skeleton={nodes.Object_424.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_425.geometry} material={materials.Head} skeleton={nodes.Object_425.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_426.geometry} material={materials.Head} skeleton={nodes.Object_426.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_427.geometry} material={materials.Hair_Short} skeleton={nodes.Object_427.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_428.geometry} material={materials.Corset} skeleton={nodes.Object_428.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_429.geometry} material={materials.Corset} skeleton={nodes.Object_429.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_430.geometry} material={materials.Corset} skeleton={nodes.Object_430.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_431.geometry} material={materials.Corset} skeleton={nodes.Object_431.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_432.geometry} material={materials.Corset} skeleton={nodes.Object_432.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_433.geometry} material={materials.Bikini_Top} skeleton={nodes.Object_433.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_434.geometry} material={materials.Bikini_Top} skeleton={nodes.Object_434.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/megashiny/282.glb')
