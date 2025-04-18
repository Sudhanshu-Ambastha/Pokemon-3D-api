/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/89.glb -o models/gltfjsx/regular/89.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/89.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature001" rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes.Betbeton} />
        </group>
        <skinnedMesh name="Object_0" geometry={nodes.Object_0.geometry} material={materials.Eye} skeleton={nodes.Object_0.skeleton} rotation={[Math.PI / 2, 0, 0]} />
        <skinnedMesh name="Object_1" geometry={nodes.Object_1.geometry} material={materials.Body} skeleton={nodes.Object_1.skeleton} rotation={[Math.PI / 2, 0, 0]} />
        <skinnedMesh name="Object_2" geometry={nodes.Object_2.geometry} material={materials.Body} skeleton={nodes.Object_2.skeleton} rotation={[Math.PI / 2, 0, 0]} />
        <skinnedMesh name="Object_3" geometry={nodes.Object_3.geometry} material={materials.Body} skeleton={nodes.Object_3.skeleton} rotation={[Math.PI / 2, 0, 0]} />
        <skinnedMesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.Body} skeleton={nodes.Object_4.skeleton} rotation={[Math.PI / 2, 0, 0]} />
        <skinnedMesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.Body} skeleton={nodes.Object_5.skeleton} rotation={[Math.PI / 2, 0, 0]} />
        <skinnedMesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.Body} skeleton={nodes.Object_6.skeleton} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/89.glb')
